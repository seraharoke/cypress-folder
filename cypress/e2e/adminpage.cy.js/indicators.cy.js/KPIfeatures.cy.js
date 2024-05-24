it.only ('sign_in' , function() { 
    cy.visit ('http://staging.perforlitics.com/')
    cy.viewport(1280, 800 )

    cy.get('[data-testid="email-login"]').type('seraharoke5@gmail.com')

     cy.get('[data-testid="password-login"]').type('123456')
     
     cy.get('[data-testid="login-button"]').click()

     cy.get('[data-testid="menu-indicators"] > .ub-fnt-sze_14px > .ub-mt_0px').should('be.visible', 'lemployee button should be visible').click()
   
     cy.get('[data-testid="menu-indicators"] > .ub-fnt-sze_14px > .ub-mt_0px').should('be.visible', 'employee button should be visible').click()
     cy.get('.max-sm\:flex-col-reverse > :nth-child(1) > .ub-flx_1 > .ub-color_3366FF').click()
     cy.get('.ub-flx_1 > :nth-child(2)').click()
     cy.get('.ub-flx_1 > :nth-child(3)').click()
    }) 