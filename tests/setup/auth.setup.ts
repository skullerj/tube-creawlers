import path from "node:path";
import { expect, test as setup } from "@playwright/test";

const authFile = path.join(__dirname, "../../playwright/.auth/user.json");
const username = process.env.TEST_USER_EMAIL;
const password = process.env.TEST_USER_PASSWORD;

setup("authenticate", async ({ page }) => {
	if (!username || !password) {
		throw new Error(
			"Please set TEST_USER_EMAIL and TEST_USER_PASSWORD environment variables.",
		);
	}
	// Perform authentication steps. Replace these actions with your own.
	await page.goto("/api/auth/login");
	await page.getByLabel(" Email address ").fill(username);
	await page.getByLabel(" Password ").fill(password);
	await page.getByRole("button", { name: "Continue", exact: true }).click();

	// Wait until we see the "Log out button"
	await expect(page.getByText("Log out")).toBeVisible();

	// End of authentication steps.

	await page.context().storageState({ path: authFile });
});
