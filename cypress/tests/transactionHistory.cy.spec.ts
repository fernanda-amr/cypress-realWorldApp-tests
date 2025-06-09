import LoginPage from "../pages/loginPage";
import TransactionPage from "../pages/transactionPage";

const loginPage = new LoginPage();
const transactionPage = new TransactionPage();
const newUser = {
  firstName: "Amanda",
  lastName: "Gyger",
  username: "Amanda_G",
  password: "s3cret",
};

describe("Transaction Histoty", () => {
  it("Should display transaction history successfully", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser("Heath93", "s3cret");

    cy.contains("Logout").should("be.visible");

    transactionPage.accessTransactionFeed();
    transactionPage.showTransactions();
  });

  it("Should show a message if there are no transactions", () => {
    cy.request("POST", "http://localhost:3003/users", newUser);

    loginPage.accessLoginPage();
    loginPage.loginWithUser(newUser.username, newUser.password);

    transactionPage.accessTransactionFeed();
    transactionPage.checkNoTransactions();
  });
});
