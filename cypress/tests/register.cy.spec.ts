import RegisterPage from "../pages/registerPage";

const registerPage = new RegisterPage();

describe("Signup", () => {
  it("Should successfully register a new user", () => {
    const username = `YanW_${Date.now()}`;

    registerPage.acessLoginPage();
    registerPage.acessSignupPage();

    registerPage.registerNewUser("Yan", "Wilson", username, "s3cret");

    cy.url().should("include", "/signin");
    registerPage.loginWithUser(username, "s3cret");

    cy.contains("Logout").should("be.visible");
  });

  it("Should show error with invalid credentials", () => {
    registerPage.acessLoginPage();
    registerPage.acessSignupPage();

    cy.get(registerPage.selectorsList().signupSubmitBotton).click();

    cy.contains("First Name is required").should("be.visible");
  });
});
