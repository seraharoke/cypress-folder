it.only ('sign_in' , function() { 
    cy.visit ('http://staging.perforlitics.com/')
    cy.viewport(1280, 800 )

    cy.get('[data-testid="email-login"]').type('seraharoke5@gmail.com')

     cy.get('[data-testid="password-login"]').type('123456')
     
     cy.get('[data-testid="login-button"]').click()

     cy.get('a > [data-testid="menu-teams"]').should('be.visible', 'lemployee button should be visible').click()
   
     cy.get('a > [data-testid="menu-teams"]').should('be.visible', 'employee button should be visible').click()
     cy.get('[data-testid="teams-filter-all"]').click()
     cy.get('[data-testid="teams-filter-unassigned"]').click()
     cy.get('[data-testid="teams-filter-search-button"]').click()
     cy.get('[data-testid="teams-filter-search-input"]').click()
    }) 