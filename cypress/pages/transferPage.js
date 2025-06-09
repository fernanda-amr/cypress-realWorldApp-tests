class TransferPage {
    selectorsList(){
        const selectors = {
            newTransactionButton: "[href='/transaction/new']",
            userSearchInput: "[data-test='user-list-search-input']",
            userListItem: ".MuiGrid-spacing-xs-1",
            amountInput: "[name='amount']",
            noteInput: "[placeholder='Add a note']",
            submitBUtton: "[data-test='transaction-create-submit-payment']",
            successMessage:"[data-test='alert-bar-success']"
            //failMessage: "..." 
        }
        return selectors
    }
    
    initiateTranfer(user,amount,note){
    cy.get(this.selectorsList().newTransactionButton).click()
    cy.get(this.selectorsList().userSearchInput).type(user)
    cy.get(this.selectorsList().userListItem).first().click()
    cy.get(this.selectorsList().amountInput).type(amount)
    cy.get(this.selectorsList().noteInput).type(note)
    cy.get(this.selectorsList().submitBUtton).click()

    }

    verifySuccess(){
        cy.get(this.selectorsList().successMessage).should('contain', 'Transaction Submitted')
    }

    // checkError(){
    //     cy.get(this.selectorsList().failMessage).should('contain', 'Insufficient funds')
    // }

}

export default TransferPage