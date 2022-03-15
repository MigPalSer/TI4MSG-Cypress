/// <reference types="cypress" />

it('should navigate to the web', () => {
    cy.visit('http://migpalser.github.io/TI4MapStringGenerator/')
  })

  it('should be able to generate a new string', () => {
    cy.visit('http://migpalser.github.io/TI4MapStringGenerator/')
    
    //cy.get('.toggle').click()
    //cy.contains('Clear').click()

    })