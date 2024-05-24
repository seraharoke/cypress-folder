
    it ('signup' , () => {  
    cy.visit ('http://staging.perforlitics.com/')

    cy.get('[data-testid="homepage-register-link"]').click()

    cy.get('[data-testid="register-firstname-input"]').type('tomi')

    cy.get('[data-testid="register-lastname-input"]').type('aroke')

    cy.get('[data-testid="register-phonenunber-input"]').type('09099999999')

    cy.get('[data-testid="register-email-input"]').type('seraharoke5+2@gmail.com')

    cy.get('[data-testid="register-password-link"]').type('123456')

    cy.get('[data-testid="register-organizationname-input"]').type('agg')

    cy.get('[data-testid="register-organisation-industry-input"]').select()

    cy.get('[data-testid="register-terms-link"]').click()

    cy.get('[data-testid="register-signup-button"]').click()
}) 

