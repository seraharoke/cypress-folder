it.only('sign_in', function() { 
    cy.visit('http://staging.perforlitics.com/')
    cy.viewport(1280, 800)
    
    cy.get('[data-testid="homepage-signin-link"]').click()

    cy.get('[data-testid="forget-password-link"]').click()

    cy.get('[data-testid="email-input"]').type('seraharoke5@gmail.com')
    cy.get('[data-testid="reset-password-button"]').click()

    cy.contains('A password reset link has been sent to seraharoke5@gmail.com')
})
