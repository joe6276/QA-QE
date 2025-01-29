/// <reference types="Cypress"/>

describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('/about.html')
  })

  it('Should submit the form ',  () => {
    cy.get('[data-cy="contact-input-message"]').type('Hello There')
    cy.get('[data-cy="contact-input-name"]').type('John Doe').as("nameInput")
    // cy.get("@nameInput").focus()
    cy.get('[data-cy="contact-input-email"]').type('john@gmail.com')
    cy.get('[data-cy="contact-btn-submit"]').as('btn')
    // cy.get('@btn').click()
    cy.submitForm()
      // Alias

    //  Assertions
    cy.get('[data-cy="contact-btn-submit"]').contains("Sending..")
    cy.get('[data-cy="contact-btn-submit"]').should('have.attr', 'disabled')
  })


  
  it('Validation targetting the Button',  () => {
   
    cy.submitForm()
    cy.get('[data-cy="contact-btn-submit"]').then((el)=>{
    
      expect(el.attr('disabled')).to.be.undefined
      expect(el.text()).to.eq("Submit")
    })

    })

    
    it('Validate the Input Elemenents',  () => {

      cy.submitForm()
      cy.get('[data-cy="contact-input-message"]').parent().then((el)=>{
       expect(el.attr('class')).to.contains('invalid')
      })

      cy.get('[data-cy="contact-input-message"]').type('Hello There')
      cy.submitForm()
      cy.get('[data-cy="contact-input-name"]').parent().then((el)=>{
       expect(el.attr('class')).to.not.be.undefined
       expect(el.attr('class')).to.contains('invalid')
      })


      cy.get('[data-cy="contact-input-message"]').type('Hello There')
      cy.get('[data-cy="contact-input-name"]').type('John Doe')

      cy.submitForm()
      cy.get('[data-cy="contact-input-email"]').parent().should((el)=>{
       expect(el.attr('class')).to.not.be.undefined
       expect(el.attr('class')).to.contains('invalid')
      })


    }) 


    it('Should submit the form when you click enter',()=>{
      cy.get('[data-cy="contact-input-message"]').type('Hello There')
      cy.get('[data-cy="contact-input-name"]').type('John Doe').as("nameInput")
      cy.get('[data-cy="contact-input-email"]').type('john@gmail.com')
      cy.submitForm()
        // skippng clicking in the button 
      cy.get('[data-cy="contact-btn-submit"]').contains("Sending..")
      cy.get('[data-cy="contact-btn-submit"]').should('have.attr', 'disabled')
 
      
    })
})