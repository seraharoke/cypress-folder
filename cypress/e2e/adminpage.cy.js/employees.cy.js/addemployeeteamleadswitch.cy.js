it.only ('sign_in' , function() { 
    cy.visit ('http://staging.perforlitics.com/')
    cy.viewport(1280, 800 )
  
     cy.get('[data-testid="email-login"]').type('seraharoke5@gmail.com')
  
     cy.get('[data-testid="password-login"]').type('123456')
     
     cy.get('[data-testid="login-button"]').click()

     cy.get('[data-testid="menu-employees"]').click()
     
     cy.get('[data-testid="add-employee-form-assign-team-lead-switch"]').click()
    }) 