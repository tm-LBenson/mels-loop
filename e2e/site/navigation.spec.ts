import { test, expect } from '@playwright/test';
import { getFrontMatter } from '../utils/mdTestUtils';
import { getLocalePath, locales, translate } from '../utils/localeTestUtils';

test.describe('TopBar Navigation', () => {
	locales.map((locale) => {
		test(`${locale} > should navigate to Homepage from Site Name button`, async ({
			page,
		}) => {
			await page.goto(getLocalePath(locale, '', 'about'));
			await page
				.getByRole('link', {
					name: translate(locale, 'site.title'),
					exact: true,
				})
				.click();
			const p = getLocalePath(locale, '', 'about');
			await expect(page).toHaveURL(p);
		});
	});
});

test.describe('Dynamic Pages', () => {
	locales.map((locale) => {
		test(`${locale} > should navigate to the About page`, async ({ page }) => {
			const path = 'about';
			const filename = 'index';
			const { data } = getFrontMatter('', `${path}/${filename}`, locale);
			const localePath = getLocalePath(locale, path);

			await page.goto(localePath);
			await page.click(
				`text=${translate(locale, 'nav.items.pages.about.label')}`
			);

			await expect(page).toHaveURL(localePath);
			await expect(page.locator('h1')).toHaveText(data.title as string);
		});

		test.skip(`${locale} > should navigate to the About page from Learn More link`, async ({
			page,
		}) => {
			const path = 'about';
			const filename = 'index';
			const { data } = getFrontMatter('', `${path}/${filename}`, locale);
			const localePath = getLocalePath(locale, path);

			await page.goto(localePath);
			await page.hover(
				`text=${translate(locale, 'nav.items.pages.about.label')}`
			);
			await page.click(`text=${translate(locale, 'button.learnMore')}`);

			await expect(page).toHaveURL(localePath);
			await expect(page.locator('h1')).toHaveText(data.title as string);
		});
	});
});
