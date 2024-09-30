import { expect, test } from "@playwright/test";

test("Go to landing page", async ({ page }) => {
	await page.goto("/");

	await expect(page).toHaveTitle("Tube Crawlers");
});

test("Got to home page and get redirected to / as user is not logged in", async ({
	page,
}) => {
	await page.goto("/home");

	await expect(page).toHaveURL("http://localhost:3000/");
});
