class TransactionPage {
    selectorList(){
        const selectors = {
            personalTransactionButton: "[href='/personal']",
            transaction: ".css-hfwr93-MuiGrid-root",
            noTransaction: "[data-test='empty-list-header']"
        }
        return selectors
    }

    accessTransactionFeed(){
        cy.get(this.selectorList().personalTransactionButton).click({force:true})
    }

    showTransactions(){
        cy.get(this.selectorList().transaction).should('have.length.greaterThan', 0)
    }
    checkNoTransactions(){
        cy.get(this.selectorList().noTransaction).should('be.visible')

    }
}

export default TransactionPage