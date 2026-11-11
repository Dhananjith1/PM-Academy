import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const wcagTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('page has one main landmark, a single h1, and no duplicate IDs', async ({ page }) => {
  await expect(page).toHaveTitle(/Independent Project Management Study Resource/);
  await expect(page.locator('main')).toHaveCount(1);
  await expect(page.locator('h1')).toHaveCount(1);
  const duplicateIds = await page.locator('[id]').evaluateAll(nodes => {
    const ids = nodes.map(node => node.id).filter(Boolean);
    return [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  });
  expect(duplicateIds).toEqual([]);
});

test('skip link is the first keyboard stop and moves focus to main', async ({ page }) => {
  await page.keyboard.press('Tab');
  const skip = page.locator('.skip-link');
  await expect(skip).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main-content')).toBeFocused();
});

test('glossary search returns matching concepts', async ({ page }) => {
  await page.getByRole('searchbox', { name: /search glossary/i }).fill('WBS');
  await expect(page.locator('#gl')).toContainText('Work Breakdown Structure');
  await page.getByRole('searchbox', { name: /search glossary/i }).fill('not-a-real-term');
  await expect(page.locator('#gl')).toContainText('No matching glossary terms');
});

test('lesson navigation, progress semantics and persistence work', async ({ page }) => {
  await page.locator('.side button.l').nth(1).click();
  await expect(page.locator('#lesson-title')).toBeFocused();
  await expect(page.locator('#lesson-title')).toContainText('Predictive Process Groups');
  await page.getByRole('button', { name: /Mark as Completed/ }).click();
  await expect(page.locator('#pt')).toHaveText('1 of 27 completed');
  await expect(page.locator('#pb')).toHaveJSProperty('value', 1);
  await expect(page.locator('#pb')).toHaveAttribute('aria-valuetext', '1 of 27 lessons completed');
  await page.reload();
  await expect(page.locator('#pt')).toHaveText('1 of 27 completed');
});

test('EVM calculations explain schedule variance in value units', async ({ page }) => {
  await page.getByRole('button', { name: /Budgeting & Earned Value/ }).click();
  await page.locator('#e1').fill('100000');
  await page.locator('#e2').fill('40000');
  await page.locator('#e3').fill('35000');
  await page.locator('#e4').fill('50000');
  const output = page.locator('#eo');
  await expect(output).toContainText('Cost Variance (CV) = −$15,000');
  await expect(output).toContainText('Schedule Variance (SV) = −$5,000');
  await expect(output).toContainText('Less budgeted work value earned than planned');
  await expect(output).toContainText('SV is expressed in budget units, not calendar days');
  await expect(output).toContainText('Cost Performance Index (CPI) = 0.70');
  await expect(output).toContainText('Schedule Performance Index (SPI) = 0.88');
  await expect(output).toContainText('Estimate at Completion (EAC) = $142,857.14');
  await page.locator('#e4').fill('0');
  await expect(output).toContainText('Not available (denominator is zero)');
});

test('quiz answers and question transitions retain keyboard focus', async ({ page }) => {
  for (let i = 0; i < 13; i += 1) {
    await page.locator('#qz .q-options button').first().click();
    await expect(page.locator('.q-feedback')).toBeVisible();
    await page.getByRole('button', { name: /Next Question|View Final Score/ }).click();
    if (i < 12) await expect(page.locator('#quiz-question-title')).toBeFocused();
  }
  await expect(page.locator('#quiz-result-title')).toBeFocused();
  await expect(page.locator('#qz')).toContainText('Your Final Score:');
  await page.getByRole('button', { name: 'Retake Quiz' }).click();
  await expect(page.locator('#quiz-question-title')).toBeFocused();
});

test('project overview modal traps focus, closes on Escape and restores focus', async ({ page }) => {
  const trigger = page.getByRole('button', { name: /Explore Project Background/ });
  await trigger.click();
  const modal = page.locator('#pfModal');
  const close = modal.getByRole('button', { name: /Close project overview/ });
  const lastLink = modal.getByRole('link', { name: /View Project Documentation/ });
  await expect(close).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(lastLink).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(close).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(modal).not.toHaveClass(/active/);
  await expect(trigger).toBeFocused();
});

test('page has no horizontal overflow across representative responsive widths', async ({ page }) => {
  const widths = [320, 360, 375, 390, 414, 600, 768, 820, 900, 1024, 1280, 1440];
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    const dimensions = await page.evaluate(() => {
      const viewport = document.documentElement.clientWidth;
      const content = document.documentElement.scrollWidth;
      const offenders = [...document.querySelectorAll('body *')]
        .map(el => {
          const rect = el.getBoundingClientRect();
          return {
            tag: el.tagName.toLowerCase(),
            id: el.id || undefined,
            className: typeof el.className === 'string' ? el.className : undefined,
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width)
          };
        })
        .filter(el => el.left < -1 || el.right > viewport + 1)
        .slice(0, 12);
      return { viewport, content, offenders };
    });
    expect(
      dimensions.content,
      `Horizontal overflow at viewport width ${width}px. Offenders: ${JSON.stringify(dimensions.offenders)}`
    ).toBeLessThanOrEqual(dimensions.viewport);
  }
});

test('external links avoid direct PMI links and use safe new-tab attributes', async ({ page }) => {
  const externalLinks = await page.locator('a[href^="http://"], a[href^="https://"]').evaluateAll(anchors =>
    anchors.map(anchor => ({
      hostname: new URL(anchor.href).hostname.toLowerCase(),
      target: anchor.target.toLowerCase(),
      rel: [...anchor.relList]
    }))
  );

  expect(externalLinks.length).toBeGreaterThan(0);
  for (const link of externalLinks) {
    expect(link.hostname === 'pmi.org' || link.hostname.endsWith('.pmi.org')).toBe(false);
    if (link.target === '_blank') {
      expect(link.rel).toContain('noopener');
      expect(link.rel).toContain('noreferrer');
    }
  }
});

test('initial page and modal have no axe WCAG A/AA violations', async ({ page }) => {
  const initial = await new AxeBuilder({ page }).withTags(wcagTags).analyze();
  expect(initial.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) }))).toEqual([]);
  await page.getByRole('button', { name: /Explore Project Background/ }).click();
  const modal = await new AxeBuilder({ page }).withTags(wcagTags).analyze();
  expect(modal.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) }))).toEqual([]);
  await page.keyboard.press('Escape');
});

test('all 27 lesson states pass axe WCAG A/AA scans in desktop Chromium', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium', 'The full lesson-by-lesson axe scan runs once in desktop Chromium; initial, modal, and representative interaction scans run across all browser projects.');
  test.setTimeout(90_000);
  for (let i = 0; i < 27; i += 1) {
    await page.locator('.side button.l').nth(i).click();
    const results = await new AxeBuilder({ page }).withTags(wcagTags).analyze();
    expect(
      results.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) })),
      `Accessibility violations in lesson ${i + 1}`
    ).toEqual([]);
  }
});

test('quiz feedback state has no axe WCAG A/AA violations', async ({ page }) => {
  await page.locator('#qz .q-options button').first().click();
  const results = await new AxeBuilder({ page }).withTags(wcagTags).analyze();
  expect(results.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) }))).toEqual([]);
});


test('all 13 quiz feedback states pass axe WCAG A/AA scans in desktop Chromium', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium', 'The full question-by-question axe scan runs once in desktop Chromium; quiz flow and representative feedback scans run across all browser projects.');
  test.setTimeout(90_000);
  for (let i = 0; i < 13; i += 1) {
    await page.locator('#qz .q-options button').first().click();
    await expect(page.locator('.q-feedback')).toBeVisible();
    const results = await new AxeBuilder({ page }).withTags(wcagTags).analyze();
    expect(
      results.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) })),
      `Accessibility violations in quiz feedback for question ${i + 1}`
    ).toEqual([]);
    await page.getByRole('button', { name: /Next Question|View Final Score/ }).click();
  }
});
