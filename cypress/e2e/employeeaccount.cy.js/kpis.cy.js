it.only('sign_in', function() { 
    cy.visit('http://staging.perforlitics.com/')
    cy.viewport(1280, 800)
    
    cy.get('[data-testid="email-login"]').type('seraharoke5+eneze@gmail.com')

    cy.get('[data-testid="password-login"]').type('123456')

    cy.get('[data-testid="login-button"]').click()
   
    cy.get('[data-testid="menu-kpis"] > .ub-fnt-sze_14px > .ub-mt_0px').click()
    cy.get('[data-testid="employee-kpi-filters-all"]').click()
    cy.get('[data-testid="employee-kpi-filters-objectives"]').click()
    cy.get('[data-testid="employee-kpi-filters-perspectives"]').click()
}) 