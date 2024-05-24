it.only ('sign_in' , function() { 
    cy.visit ('http://staging.perforlitics.com/')
    cy.viewport(1280, 800 )

    cy.get('[data-testid="email-login"]').type('seraharoke5@gmail.com')

     cy.get('[data-testid="password-login"]').type('123456')
     
     cy.get('[data-testid="login-button"]').click()

     cy.get('[data-testid="menu-objectives"] > .ub-fnt-sze_14px > .ub-mt_0px').should('be.visible', 'lemployee button should be visible').click()
   
     cy.get('[data-testid="menu-objectives"] > .ub-fnt-sze_14px > .ub-mt_0px').should('be.visible', 'employee button should be visible').click()
     cy.get('[data-testid="objective-form-add-button"]').click()
     cy.get('.ub-pl_10px').select()
     cy.get('.ub-b-btm-stl_solid > .ub-pst_relative').click()
     cy.get('[data-testid="objective-form-submit-button"]').click()
    }) 