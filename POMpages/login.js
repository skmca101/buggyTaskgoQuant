

export class loginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator("input[name='login']");
    this.password = page.locator("input[name='password']");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async loginpageDetails()
  {
    
  }
  
}
