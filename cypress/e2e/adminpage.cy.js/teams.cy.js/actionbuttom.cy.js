it.only ('sign_in' , function() { 
    cy.visit ('http://staging.perforlitics.com/')
    cy.viewport(1280, 800 )

    cy.get('[data-testid="email-login"]').type('seraharoke5@gmail.com')

     cy.get('[data-testid="password-login"]').type('123456')
     
     cy.get('[data-testid="login-button"]').click()

     cy.get('a > [data-testid="menu-teams"]').should('be.visible', 'lemployee button should be visible').click()
   
     cy.get('a > [data-testid="menu-teams"]').should('be.visible', 'employee button should be visible').click()
     cy.get(':nth-child(1) > :nth-child(6) > .ub-flx_1 > .ub-pst_relative').click()
     cy.get('.ub-bg_wivy90 > :nth-child(1)').click()
     cy.get('.ub-color_3366FF > .ub-crsr_pointer_1mw91nf > .ub-fnt-sze_14px').click()
     cy.get('.ub-flx_1 > .ub-just-cnt_end > .ub-pst_relative').click()
     cy.get('[data-testid="add-new-indicator-button"]').click()
     cy.get(':nth-child(1) > :nth-child(1) > .w-full > .ub-pst_relative').click()
     cy.get('.ub-bg_wivy90 > .ub-just-cnt_end > .ub-color_474d66').click()
    }) 