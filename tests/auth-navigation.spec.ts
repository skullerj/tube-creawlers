import { expect, test } from "@playwright/test";

test.describe("Navigating the app as an authenticated user", () => {
	test.use({ storageState: { cookies: [], origins: [] } });
	test("Go to landing page", async ({ page }) => {
		await page.goto("/");

		await expect(page).toHaveTitle("Tube Crawlers");
	});

	test("Going to /home should redirect me to the auth provider", async ({
		page,
	}) => {
		await page.goto("/home");

		await expect(page).toHaveURL(/(auth0.com){1}/);
	});
});

test.describe("Navigating as an authenticated user", () => {
	test("Go to home page", async ({ page }) => {
		await page.goto("/home");
		await expect(page.getByText("well..")).toBeVisible();
	});
});
