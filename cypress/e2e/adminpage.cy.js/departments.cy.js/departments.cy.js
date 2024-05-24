it.only ('sign_in' , function() { 
    cy.visit ('http://staging.perforlitics.com/')
    cy.viewport(1280, 800 )

    cy.get('[data-testid="email-login"]').type('seraharoke5@gmail.com')

     cy.get('[data-testid="password-login"]').type('123456')
     
     cy.get('[data-testid="login-button"]').click()

     cy.get('[data-testid="menu-departments"] > .ub-fnt-sze_14px > .ub-mt_0px').should('be.visible', 'departments button should be visible').click()
   
     cy.get('[data-testid="menu-departments"] > .ub-fnt-sze_14px > .ub-mt_0px').should('be.visible', 'departments button should be visible').click()
     cy.get('[data-testid="add-department-button"]').click()
     cy.get('[data-testid="add-department-name-input"]').click()
     cy.get('.ub-pst_relative.ub-w_100prcnt > .ub-w_100prcnt').click()
     cy.get('.ub-pt_32px > .ub-pst_relative').click()
    }) 