it.only ('sign_in' , function() { 
    cy.visit ('http://perforlitics.com/')
    cy.viewport(1280, 800 )

    cy.get('[data-testid="homepage-signin-link"]').click()

}) 