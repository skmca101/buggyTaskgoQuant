import { test, expect } from "@playwright/test";
import { RegisterUser } from "../POMpages/createUser.js";
import * as jsonData from "../dataFiles/data.json";

test.describe("Verify that the user should be created successfully with valid details", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.BASE_URL + "register", {
      waitUntil: "domcontentloaded",
    });
  });
  test("Create user with valid details", async ({ page }) => {
    const user = new RegisterUser(page);

    await test.step("enter valid username", async () => {
      //=============Generate random username============//
      const username = `user_${Date.now()}`;
      console.log(username);
      await user.enterUsername(username);
    });
    await test.step("enter valid first name", async () => {
      await user.enterFirstName(jsonData.userCreationDetails.user1.firstName);
    });
    await test.step("enter valid last name", async () => {
      await user.enterLastName(jsonData.userCreationDetails.user1.lastName);
    });
    await test.step("enter valid password", async () => {
      await user.enterPassword(jsonData.userCreationDetails.user1.password);
    });
    await test.step("enter valid confirm password", async () => {
      await user.enterConfirmPassword(
        jsonData.userCreationDetails.user1.confirmPassword
      );
    });
    await test.step("Verify regitration button is able to click", async () => {
      await user.verifyRegButton();
    });
    await test.step("Click to register user", async () => {
      await user.clickOnRegButton(jsonData.userCreationDetails.user1.firstName);
    });
    await test.step("Verify successfully message after user creation successfully", async () => {
      await user.verifySuccessMsg(
        jsonData.userCreationDetails.user1.successMessage
      );
    });
  });

  test("verify to create user with alphanumeric username and valid other details", async ({
    page,
  }) => {
    const user = new RegisterUser(page);

    await test.step("enter alphanumeric username", async () => {
      const alphaNumUserName = `alpha@${Date.now()}`;
      console.log(alphaNumUserName);
      await user.enterUsername(alphaNumUserName);
    });
    await test.step("enter first name", async () => {
      await user.enterFirstName(jsonData.userCreationDetails.user2.firstName);
    });
    await test.step("enter last name", async () => {
      await user.enterLastName(jsonData.userCreationDetails.user2.lastName);
    });
    await test.step("enter password", async () => {
      await user.enterPassword(jsonData.userCreationDetails.user2.password);
    });
    await test.step("enter confirm password", async () => {
      await user.enterConfirmPassword(
        jsonData.userCreationDetails.user2.confirmPassword
      );
    });
    await test.step("Verify regitration button is able to click", async () => {
      await user.verifyRegButton();
    });
    await test.step("Click to register user", async () => {
      await user.clickOnRegButton(jsonData.userCreationDetails.user2.firstName);
    });
    await test.step("Verify successfully message after user creation successfully", async () => {
      await user.verifySuccessMsg(
        jsonData.userCreationDetails.user2.successMessage
      );
    });
  });

  test("verify to create user with existing username and valid other details", async ({
    page,
  }) => {
    const Neguser = new RegisterUser(page);
    await test.step("enter alphanumeric username", async () => {
      await Neguser.enterUsername(
        jsonData.userCreationDetails.Neg_user1.ExistingUsername
      );
    });
    await test.step("enter first name", async () => {
      await Neguser.enterFirstName(
        jsonData.userCreationDetails.Neg_user1.firstName
      );
    });
    await test.step("enter last name", async () => {
      await Neguser.enterLastName(
        jsonData.userCreationDetails.Neg_user1.lastName
      );
    });
    await test.step("enter password", async () => {
      await Neguser.enterPassword(
        jsonData.userCreationDetails.Neg_user1.password
      );
    });
    await test.step("enter confirm password", async () => {
      await Neguser.enterConfirmPassword(
        jsonData.userCreationDetails.Neg_user1.confirmPassword
      );
    });
    await test.step("Verify regitration button is able to click", async () => {
      await Neguser.verifyRegButton();
    });
    await test.step("Click to register user", async () => {
      await Neguser.clickOnRegButton();
    });
     await test.step("Verify already exist message ", async()=>{
      await Neguser.verifyUsernameExistMsg(jsonData.loginDetails.invalidMessage.uNameExistingMsg)
      });
  });

test("verify to create user with invalid username and valid other details", async ({
    page,
  }) => {
    const Neguser1 = new RegisterUser(page);
    await test.step("enter alphanumeric username", async () => {
      await Neguser1.enterUsername(
        jsonData.userCreationDetails.Neg_user2.wrongUsername
      );
    });
    await test.step("enter first name", async () => {
      await Neguser1.enterFirstName(
        jsonData.userCreationDetails.Neg_user1.firstName
      );
    });
    await test.step("enter last name", async () => {
      await Neguser1.enterLastName(
        jsonData.userCreationDetails.Neg_user1.lastName
      );
    });
    await test.step("enter password", async () => {
      await Neguser1.enterPassword(
        jsonData.userCreationDetails.Neg_user1.password
      );
    });
    await test.step("enter confirm password", async () => {
      await Neguser1.enterConfirmPassword(
        jsonData.userCreationDetails.Neg_user1.confirmPassword
      );
    });
    await test.step("Verify regitration button is able to click", async () => {
      await Neguser1.verifyRegButton();
    });
    await test.step("Click to register user", async () => {
      await Neguser1.clickOnRegButton();
    });
     await test.step("Verify already exist message ", async()=>{
      await Neguser1.verifyUsernameExistMsg(jsonData.loginDetails.invalidMessage.uNameExistingMsg)
      });
  });

});
