import { expect } from "@playwright/test";


export class RegisterUser {
  constructor(page) {
    this.page = page;
    this.registerlink = page.getByRole("link", { name: "Register" });
    //this.registerlink = page.locator("a[class='btn btn-success-outline']")
    this.userName = page.getByLabel('Login')
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.password = page.locator("#password");
    this.confirmPassword = page.locator("#confirmPassword");
    this.successMsg = page.getByText("Registration is successful")
    this.existingUnameMsg = page.getByText("UsernameExistsException: User already exists")
    this.reg_Button  = page.getByRole("button",{name: "Register"})
  }
  
  async enterUsername(uname)
  {
 
   await this.userName.fill(uname);
  }
   async enterFirstName(fname)
  {
   await this.firstName.fill(fname);
  }
  async enterLastName(lname)
  {
   await this.lastName.fill(lname);
  }
  async enterPassword(pwd)
  {
   await this.password.fill(pwd);
  }
  async enterConfirmPassword(cpwd)
  {
   await this.confirmPassword.fill(cpwd);
  }

  async verifyRegButton()
  {
    await expect(this.reg_Button).toBeVisible()
  }
  async clickOnRegButton()
  {
    await this.reg_Button.click()
  }
  async verifySuccessMsg(msg)
  {
    await expect(this.successMsg).toHaveText(msg)

  }
  async verifyUsernameExistMsg(msg)
  {
    await expect(this.existingUnameMsg).toHaveText(msg)

  }

  
  
}
