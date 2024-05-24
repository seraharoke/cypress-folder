it.only('sign_in', function() { 
    cy.visit('http://staging.perforlitics.com/')
    cy.viewport(1280, 800)

    cy.get('[data-testid="email-login"]').type('seraharoke5+BISOLA@gmail.com')

    cy.get('[data-testid="password-login"]').type('123456')
     
    cy.get('[data-testid="login-button"]').click()
    cy.get('#downshift-0-input', { timeout: 10000 }).should('be.visible', 'last 12 months button should be visible').click()
   
    cy.get('#downshift-0-input').should('be.visible', 'last 12 months button should be visible').click()
})