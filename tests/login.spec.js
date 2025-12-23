import { test, expect } from "@playwright/test";
import * as loginData from "../dataFiles/data.json";
import { loginPage } from "../POMpages/login.js";

test.describe("To verify the login functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL, {
      waitUntil: "domcontentloaded",
    });
  });

  test("Login page with valid username and password", async ({ page }) => {
    const userLogin = new loginPage(page);

    await test.step("Enter valid username", async () => {
      await userLogin.enterUsername(loginData.loginDetails.valid1.username);
    });
    await test.step("Enter valid password", async () => {
      await userLogin.enterPassword(loginData.loginDetails.valid1.password);
    });
    await test.step("Click to login the page", async () => {
      await userLogin.clickOnLoginButton();
    });
    await test.step("Verify the profile link after login", async () => {
      await userLogin.profileLink();
    });
    await test.step("Logout the page", async () => {
      await userLogin.logOut({timeout: 6000});
    });
  });

  test("fill the valid username and password,and hit the enter from keyboard ", async ({
    page,
  }) => {
    const userLogin1 = new loginPage(page);

    await test.step("Enter valid username", async () => {
      await userLogin1.enterUsername(loginData.loginDetails.valid1.username);
    });
    await test.step("Enter valid password", async () => {
      await userLogin1.enterPassword(loginData.loginDetails.valid1.password);
    });
    await test.step("Click to login the page", async () => {
      await userLogin1.LoginByEnterKey();
    });
    await test.step("Verify the profile link after login", async () => {
      await userLogin1.profileLink();
    });
    await test.step("Logout the page", async () => {
      await userLogin1.logOut();
    });
  });

  test("Login page with valid username and invalid password", async ({
    page,
  }) => {
    const InvalidDetails = new loginPage(page);

    await test.step("Enter valid username", async () => {
      await InvalidDetails.enterUsername(
        loginData.loginDetails.valid1.username
      );
    });
    await test.step("Enter Invalid password", async () => {
      await InvalidDetails.enterPassword(
        loginData.loginDetails.invalidPassword.password
      );
    });
    await test.step("Click to login the page", async () => {
      await InvalidDetails.clickOnLoginButton();
    });
    await test.step("Verify validation message for empty fields", async () => {
      await InvalidDetails.invalidDetailsMsg(
        loginData.loginDetails.invalidMessage.message
      );
    });
  });

});
