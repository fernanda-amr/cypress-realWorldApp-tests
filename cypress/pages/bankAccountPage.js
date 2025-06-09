class BankAccountPage {
    selectorsList(){
        const selectors = {
            nextButton: "[data-test='user-onboarding-next']",
            bankNameField: "[placeholder='Bank Name']",
            routingNumberField: "[placeholder='Routing Number']",
            accountNumber: "[placeholder='Account Number']",
            submitButton: "[data-test='bankaccount-submit']",
            messageVerification: "[data-test='user-onboarding-dialog-content']",
            doneButton: "[type='button']",
            //errorAlert:"#bankaccount-bankName-input-helper-text",
            
        }

        return selectors
        
    }

    createBankAccount(bankName, routingNumber, accountNumber){
        cy.get(this.selectorsList().bankNameField).type(bankName)
        cy.get(this.selectorsList().routingNumberField).type(routingNumber)
        cy.get(this.selectorsList().accountNumber).type(accountNumber)
        cy.get(this.selectorsList().submitButton).click()
    }

    nextButtonClick(){
        cy.get(this.selectorsList().nextButton).click()
    }

    accountVerified(){
        cy.get(this.selectorsList().messageVerification)
        cy.get(this.selectorsList().doneButton).eq(2).click()
    }

    submitEmptyForm(){
        cy.get(this.selectorsList().bankNameField).click()
        cy.get(this.selectorsList().submitButton).click()
    }

    checkBankNameErrorVisible(){
        cy.contains('Enter a bank name').should('be.visible')


    }

}

export default BankAccountPage