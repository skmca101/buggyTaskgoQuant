import { test, expect } from "@playwright/test";
import{RegisterUser} from"../POMpages/createUser.js"
import * as jsonData from "../dataFiles/data.json"
import { generateUsername } from '../utils/randomData';

test.describe("Verify that the user should be created successfully with valid details", () => {
  test("Create user with valid username, firstName, lastName, password and confirm password.", async ({ page }) => {
    const user = new RegisterUser(page)
    await test.step("page navigation", async()=>{
    await page.goto(process.env.BASE_URL + "register", {waitUntil:"domcontentloaded"});
    })

    
    await test.step("enter valid username", async()=>{
      const username = generateUsername();
      await user.enterUsername(username);
      
    });
    await test.step("enter valid first name", async()=>{
    await user.enterFirstName(jsonData.userCreationDetails.user1.firstName)
    });
    await test.step("enter valid last name", async()=>{
    await user.enterLastName(jsonData.userCreationDetails.user1.lastName)
    });
    await test.step("enter valid password", async()=>{
    await user.enterPassword(jsonData.userCreationDetails.user1.password)
    });
    await test.step("enter valid confirm password", async()=>{
    await user.enterConfirmPassword(jsonData.userCreationDetails.user1.confirmPassword)
    });
    await test.step("Verify regitration button is able to click", async()=>{
    await user.verifyRegButton()
    });
    await test.step("Click to register user", async()=>{
    await user.clickOnRegButton(jsonData.userCreationDetails.user1.firstName)
    });
   await test.step("Verify successfully message after user creation successfully", async()=>{
    await user.verifySuccessMsg(jsonData.userCreationDetails.user1.successMessage)
    });
    
  });


test("Enter alphanumeric username and valid other details", async ({ page }) => {
    const user = new RegisterUser(page)
    await test.step("page navigation", async()=>{
    await page.goto(process.env.BASE_URL + "register", {waitUntil:"domcontentloaded"});
    })

     await test.step("enter alphanumeric username", async()=>{
      await user.enterUsername(jsonData.userCreationDetails.user2.username)
    });
    await test.step("enter first name", async()=>{
    await user.enterFirstName(jsonData.userCreationDetails.user2.firstName)
    });
    await test.step("enter last name", async()=>{
    await user.enterLastName(jsonData.userCreationDetails.user2.lastName)
    });
    await test.step("enter password", async()=>{
    await user.enterPassword(jsonData.userCreationDetails.user2.password)
    });
    await test.step("enter confirm password", async()=>{
    await user.enterConfirmPassword(jsonData.userCreationDetails.user2.confirmPassword)
    });
    await test.step("Verify regitration button is able to click", async()=>{
    await user.verifyRegButton()
    });
    await test.step("Click to register user", async()=>{
    await user.clickOnRegButton(jsonData.userCreationDetails.user2.firstName)
    });
   await test.step("Verify successfully message after user creation successfully", async()=>{
    await user.verifySuccessMsg(jsonData.userCreationDetails.user2.successMessage)
    });
    
  });
});



  







