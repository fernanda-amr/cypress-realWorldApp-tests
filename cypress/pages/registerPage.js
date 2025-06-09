class RegisterPage {
    selectorsList(){
        const selectors = {
            signUpBotton: "[href='/signup']",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            signupSubmitBotton: "[data-test='signup-submit']",
            loginButton: "[type='submit']", 

        }

        return selectors
    }

    acessLoginPage(){
        cy.visit('http://localhost:3000')
    }

    acessSignupPage(){
        cy.get(this.selectorsList().signUpBotton).click()
    }

    registerNewUser(firstName, lastName, username, password){
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(password)
        cy.get(this.selectorsList().signupSubmitBotton).click()
    }

    loginWithUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default RegisterPage