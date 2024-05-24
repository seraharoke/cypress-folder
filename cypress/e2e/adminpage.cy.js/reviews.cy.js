it.only('sign_in', function() { 
    cy.visit('http://staging.perforlitics.com/')
    cy.viewport(1280, 800)
    
    cy.get('[data-testid="email-login"]').type('seraharoke5@gmail.com')

    cy.get('[data-testid="password-login"]').type('123456')

    cy.get('[data-testid="login-button"]').click()
   
    cy.get('[data-testid="menu-Reviews"]').click()
    cy.get('[data-testid="all-department-button"]').click()
    cy.get('[data-testid="add-review-cycle-button"]').click()
    cy.get('#TextInputField-1').click()
    cy.get('[data-testid="save-review-cycle-button"]').click()
    cy.get('.ub-flx-srnk_0 > .ub-pst_relative').click()
    cy.get(':nth-child(1) > :nth-child(1) > .ub-fnt-sze_12px > .ub-dspl_flex > .ub-color_3366FF > .ub-fnt-sze_14px').click()
    cy.get('.ub-f-wght_400 > .ub-pst_relative').click()

}) 