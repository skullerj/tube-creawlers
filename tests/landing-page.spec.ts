import { expect, test } from "@playwright/test";

test("Go to landing page", async ({ page }) => {
	await page.goto("/");

	await expect(page).toHaveTitle("Tube Crawlers");
});
