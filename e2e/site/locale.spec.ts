import { test, expect } from '@playwright/test';
import { translate } from '../utils/test-utils';

test.describe('Locale Selector', () => {
	// TODO: validate selected lang
	test('should switch language to LTR', async ({ page }) => {
		await page.goto('http://localhost:3000/he');
		await page.getByLabel(translate('en', 'locale.en')).click();
		await expect(page).toHaveURL('http://localhost:3000');
		await expect(page.locator('h1')).toHaveText('The Story of Mel');
	});

	test('[en] should not navigate to same language', async ({ page }) => {
		await page.goto('http://localhost:3000/');
		await page.getByLabel(translate('en', 'locale.en')).click();
		await expect(page).toHaveURL('http://localhost:3000/');
		await expect(page.locator('h1')).toHaveText('The Story of Mel');
	});

	test('should switch language to RTL', async ({ page }) => {
		await page.goto('http://localhost:3000/');
		await page.getByLabel(translate('en', 'locale.he')).click();
		await expect(page).toHaveURL('http://localhost:3000/he');
		await expect(page.locator('h1')).toHaveText('הסיפור על מל');
	});

	test('[he] should not navigate to same language', async ({ page }) => {
		await page.goto('http://localhost:3000/he');
		await page.getByLabel(translate('en', 'locale.he')).click();
		await expect(page).toHaveURL('http://localhost:3000/he');
		await expect(page.locator('h1')).toHaveText('הסיפור על מל');
	});
});
