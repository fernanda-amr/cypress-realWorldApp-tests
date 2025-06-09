import RegisterPage from "../pages/registerPage";
import BankAccountPage from "../pages/bankAccountPage"

const registerPage = new RegisterPage()
const bankAccountPage = new BankAccountPage()

describe('Bank Account', () => {
  it('Should allow the user to create a bank account after first login', () => {
    
    const username = `YanW_${Date.now()}`

    registerPage.acessLoginPage()
    registerPage.acessSignupPage()

    registerPage.registerNewUser('Yan', 'Wilson', username , 's3cret')
   
    cy.url().should('include', '/signin')
    registerPage.loginWithUser( username , 's3cret')
    
    bankAccountPage.nextButtonClick()
    cy.contains('Create Bank Account').should('be.visible')

    bankAccountPage.createBankAccount('Charleston Bank', '125634896', '872726163517')
    bankAccountPage.accountVerified()

    cy.contains('Logout').should('be.visible')
    

  })

  it('Should show error when submitting bank account form empty', () => { 
    
    const username = `YanW_${Date.now()}`

    registerPage.acessLoginPage()
    registerPage.acessSignupPage()

    registerPage.registerNewUser('Yan', 'Wilson', username , 's3cret')
   
    cy.url().should('include', '/signin')
    registerPage.loginWithUser( username , 's3cret')
    
    bankAccountPage.nextButtonClick()
    cy.contains('Create Bank Account').should('be.visible')
    
    bankAccountPage.submitEmptyForm()
    bankAccountPage.checkBankNameErrorVisible()
    

  })


})