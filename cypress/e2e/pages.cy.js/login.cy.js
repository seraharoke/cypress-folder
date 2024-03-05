export class LoginPage{
    enterEmail(){
     cy.get('[data-testid="email-login"]').type('seraharoke5@gmail.com')

    }
    enterPassword(){
     cy.get('[data-testid="password-login"]').type('123456')

    }
    enterPassword(){
        cy.get('[data-testid="login-button"]').click()
    }
}