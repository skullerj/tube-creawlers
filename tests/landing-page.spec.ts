import { describe } from "node:test";
import { expect, test } from "@playwright/test";

describe("Navigating to landing and restricted pages", () => {
	test("Go to landing page", async ({ page }) => {
		await page.goto("/");

		await expect(page).toHaveTitle("Tube Crawlers");
	});

	test("Got to home page and get redirected to the auth provider", async ({
		page,
	}) => {
		await page.goto("/home");

		await expect(page).toHaveURL(/(auth0.com){1}/);
	});
});
