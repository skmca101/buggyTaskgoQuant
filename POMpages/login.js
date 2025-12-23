import { expect } from "@playwright/test";

export class loginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator("input[name='login']");
    this.password = page.locator("input[name='password']");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.profile = page.getByRole("link", { name: "Profile" });
    this.valMsg = page.getByText("Invalid username/password");
    this.logout = page.getByRole("link", { name: "Logout" });
  }

  async enterUsername(uname) {
    await this.username.fill(uname);
  }
  async enterPassword(pwd) {
    await this.password.fill(pwd);
  }
  async clickOnLoginButton() {
    await this.loginButton.click();
  }

  async LoginByEnterKey() {
    await this.loginButton.focus();
    await this.page.keyboard.press("Enter");
  }

  async logOut() {
    await this.logout.click();
  }
  async profileLink() {
    await expect(this.profile).toHaveText("Profile");
  }

  async invalidDetailsMsg(msg) {
    await expect(this.valMsg).toHaveText(msg, { timeout: 60000 });
  }
}
