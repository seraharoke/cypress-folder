it.only ('sign_in' , function() { 
    cy.visit ('http://staging.perforlitics.com/')
    cy.viewport(1280, 800 )

    cy.get('[data-testid="email-login"]').type('seraharoke5@gmail.com')

     cy.get('[data-testid="password-login"]').type('123456')
     
     cy.get('[data-testid="login-button"]').click()
     cy.get('[data-testid="menu-departments"] > .ub-fnt-sze_14px > .ub-mt_0px').should('be.visible', 'departments button should be visible').click()
   
     cy.get('[data-testid="menu-departments"] > .ub-fnt-sze_14px > .ub-mt_0px').should('be.visible', 'departments button should be visible').click()
     cy.get(':nth-child(1) > :nth-child(6) > .ub-flx_1 > .ub-pst_relative').click()
     cy.get('.ub-pb_8px > a > .ub-crsr_pointer_1mw91nf').click()
   
    }) 