it('assertions', () => {

    cy.visit('http://staging.perforlitics.com/')

        })
        it('navigates to staging.perforlitics.com/ and runs additional commands', () => {
            cy.visit('http://staging.perforlitics.com/') // visit a different superdomain
          
            cy.origin('http://staging.perforlitics.com/', () => {
              cy.get('prforlitics').should('contain', 'signin') // now succeeds!
            })
          })