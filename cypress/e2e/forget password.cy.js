it.only ('sign_in' , function() { 
    cy.visit ('http://staging.perforlitics.com/')
    cy.viewport(1280, 800 )

    cy.get('[data-testid="homepage-signin-link"]').click()

    cy.get('[data-testid="forget-password-link"]').click()
   
}) 