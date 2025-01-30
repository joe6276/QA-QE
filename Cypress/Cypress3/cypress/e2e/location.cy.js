

/// <reference types="Cypress"/>

describe('template spec', () => {
  beforeEach(()=>{
    cy.clock()
    cy.fixture('location.json').as('locationData')
    cy.visit('http://localhost:1234/').then(win=>{
      cy.get('@locationData').then(data=>{
        cy.stub(win.navigator.geolocation, 'getCurrentPosition').as("getLocation")// empty function
        .callsFake((cb)=>{// fucntion with a callback
        setTimeout(()=>{
          cb(data)
        }, 100)
        })
  
  
        cy.stub(win.navigator.clipboard, 'writeText')
        .as('copyToClipboard')
        .resolves()

        //Spy
        // A listener that's attached to a function
        // Used for evaluating/asserting function calls
        // Does not change or replace the function

        cy.spy(win.localStorage, 'getItem').as('getStoredLocation')
        cy.spy(win.localStorage, 'setItem').as('storeLocation')

      })
      

    })
 
  })

  //Stub
  //A replacement for an existing function/ method
  // Used for evaluting and controlling function calls
  // Does not replace the fucntion
   it('Get Location ', () => {
   cy.get('[data-cy="get-loc-btn"]').as('btn').click()
   cy.get('@getLocation').should('have.been.called')
   cy.get('@btn').should('be.disabled')
   //cy.get('span').parent().contains('Location fetched!')
  cy.get('[data-cy="actions"]').contains('Location fetched!')
  })

  it('Should Share Location',()=>{
    cy.get('[data-cy="name-input"').type('John Doe')
    cy.get('[data-cy="share-loc-btn"]').as('btn')
    cy.get('@btn').should('be.disabled')
    cy.get('[data-cy="get-loc-btn"]').click()
    cy.get('@btn').click()
    cy.get('@copyToClipboard').should('have.been.called')
    cy.get('@storeLocation').should('have.been.called')
    //arguments
    cy.get('@locationData').then(data=>{
      const {latitude,longitude}= data.coords
      cy.get('@copyToClipboard').should(
        'have.been.calledWithMatch',
        new RegExp(`${latitude}.*${longitude}.*${encodeURI('John Doe')}`)
      )

      cy.get('@btn').click()
      cy.get('@getStoredLocation').should('have.been.called')
      cy.get('[data-cy="info-message"]').should('be.visible')
     
      cy.tick(2000)
      cy.get('[data-cy="info-message"]').should('not.be.visible')
    })
   
  })
})