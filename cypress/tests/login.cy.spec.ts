import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

describe("Login", () => {
  it("Should log in with valid credentials", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser("Heath93", "s3cret");

    cy.contains("Logout").should("be.visible");
  });

  it("Should show error for invalid login", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser("Ana", "1234");
    loginPage.checkAccessInvalid();
  });
});
