it.only ('sign_in' , function() { 
    cy.visit ('http://staging.perforlitics.com/')
    cy.viewport(1280, 800 )

    cy.get('[data-testid="email-login"]').type('seraharoke5@gmail.com')

     cy.get('[data-testid="password-login"]').type('123456')
     
     cy.get('[data-testid="login-button"]').click()

     cy.get('[data-testid="menu-objectives"] > .ub-fnt-sze_14px > .ub-mt_0px').should('be.visible', 'lemployee button should be visible').click()
   
     cy.get('[data-testid="menu-objectives"] > .ub-fnt-sze_14px > .ub-mt_0px').should('be.visible', 'employee button should be visible').click()
     cy.get('.max-sm\:flex-col-reverse.ub-bg_wivy90 > .ub-flx_1 > .ub-color_3366FF').click()
     cy.get('.ub-flx_1 > .ub-color_inherit').click()
     cy.get('.ub-mr_16px > .ub-w_280px').click()
     cy.get(':nth-child(2) > .ub-f-wght_500').click()
    
    }) 