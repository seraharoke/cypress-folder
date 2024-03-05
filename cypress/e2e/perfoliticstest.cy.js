/// <reference types= "cypress"/>
it ('search perforlitics' , () => {  
    cy.visit ('http://staging.perforlitics.com/')

cy.get('.glfyf').type('perforlitics {enter}')
cy.waits(20000)
cy.contains('pictures').click()
}) 