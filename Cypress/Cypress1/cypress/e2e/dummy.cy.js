
/// <reference types="Cypress"/> 
// Type support

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/Cypress/Cypress1/index.html')
    cy.get('.main-header').find('h1')

    //CSS Selector

    //implicit test 
  })
  // it("Test if i can see the heading",()=>{
  //    cy.visit('http://localhost:1234')
  //    cy.contains("Cypress Tasks").should('have.length', 1)

  //    //explicit test
  // })
})