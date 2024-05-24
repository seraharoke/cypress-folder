it.only('sign_in', function() { 
    cy.visit('http://staging.perforlitics.com/')
    cy.viewport(1280, 800)
    
    cy.get('[data-testid="email-login"]').type('seraharoke5+eneze@gmail.com')

    cy.get('[data-testid="password-login"]').type('123456')

    cy.get('[data-testid="login-button"]').click()
   
    cy.get('[data-testid="menu-home"] > .ub-fnt-sze_14px > .ub-mt_0px').click()
    cy.get('[data-testid="dashboard-download-csv"]', { timeout: 10000 }).should('be.visible', 'Download csvs should be visible').click()

   
    cy.get('[data-testid="dashboard-download-csv"]').should('be.visible', 'download csv should be visible').click()
    cy.get('.ub-pst_relative > .ub-dspl_inline-flex > .ub-fill_696f8c', { timeout: 10000 }).should('be.visible', 'last 12months should be visible').click()

   
    cy.get('.ub-pst_relative > .ub-dspl_inline-flex > .ub-fill_696f8c').should('be.visible', 'last 12months should be visible').click()
}) 