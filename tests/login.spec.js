import { test, expect } from "@playwright/test";

import * as loginData from "../dataFiles/data.json";

test.describe("User Login page", () => {
  test("Login page with valid credentials", async ({ page }) => {
    test.step("Page navigation", async () => {
      await page.goto("https://buggy.justtestit.org/")
      });
      test.step("Enter valid username", async () => {
        let username = page.locator("input[name='login']");
        await username.fill(loginData.loginDetails.valid1.username);
      });
      test.step("Enter valid password", async () => {
        let password = page.locator("input[name='password']");
        await password.fill(loginData.loginDetails.valid1.password);
      });
      test.step("Click to login the page", async () => {
        await page.getByRole("button", { name: "Login" }).click();
      });
      test.step("Verify the profile link after login", async () => {
        let profileLink = page.getByRole("link", { name: "Profile" });
        await expect(profileLink).toHaveText("Profile");
      });
    });
  });

