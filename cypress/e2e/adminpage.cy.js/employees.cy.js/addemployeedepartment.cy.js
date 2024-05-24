it.only ('sign_in' , function() { 
    cy.visit ('http://staging.perforlitics.com/')
    cy.viewport(1280, 800 )

    cy.get('[data-testid="email-login"]').type('seraharoke5@gmail.com')

     cy.get('[data-testid="password-login"]').type('123456')
     
     cy.get('[data-testid="login-button"]').click()
>cy.get('a > [data-testid="menu-employees"]').should('be.visible', 'departments button should be visible').click()
   
cy.get('a > [data-testid="menu-employees"]').should('be.visible', 'departments button should be visible').click()
cy.get('[data-testid="add-employee-dialog-button"]').click()
cy.get('[data-testid="add-employee-dialog-button"]').click()
cy.get('[data-testid="add-employee-form-email-input"]').click()
cy.get('[data-testid="add-employee-form-phone-input"]').click()
cy.get('[data-testid="add-employee-form-department-select"] > .ub-pl_10px').select()
cy.get('[data-testid="add-employee-form-department-select"] > .ub-pl_10px').select()
cy.get('[data-testid="add-employee-form-assign-hod-switch"] > .ub-crsr_pointer > .ub-w_40px > .ub-flx_1').click()
cy.get('[data-testid="add-employee-form-assign-team-lead-switch"] > .ub-crsr_pointer > .ub-w_40px > .ub-flx_1').click
cy.get('[data-testid="add-employee-form-submit"]').click()
})  