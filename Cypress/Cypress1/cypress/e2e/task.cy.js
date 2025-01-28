/// <reference types="Cypress"/> 
// Type support

describe('Tasks spec', () => {
    it('Modal closes ', () => {
        cy.visit('http://127.0.0.1:5500/Cypress/Cypress1/index.html')
        // backdrop
        // cancel 
        // backdrop
        cy.contains('Add Task').click()
        cy.get(".backdrop").click({ force: true })
        cy.get('.backdrop').should("have.class", 'hidden')
        //cancel
        cy.contains('Add Task').click()
        cy.get('.actions').contains("Cancel").click()
        cy.get('.backdrop').should("have.class", 'hidden')
    })


    it("Should add a task", () => {
        cy.visit('http://127.0.0.1:5500/Cypress/Cypress1/index.html')
        cy.contains('Add Task').click()
        cy.get('#title').type("Task One")
        cy.get('#summary').type("Task OneDescription Summary")
        cy.get('#category').select("urgent")
        cy.get('.actions').contains("Add Task").click()
        cy.get('.task').should('have.length', 1)


        cy.contains('Add Task').click()
        cy.get('#title').type("Task two")
        cy.get('#summary').type("Task Two Description Summary")
        cy.get('#category').select("low")
        cy.get('.actions').contains("Add Task").click()
        cy.get('.task').should('have.length', 2)

    })



    it("Should filter the tasks ", () => {
        cy.visit('http://127.0.0.1:5500/Cypress/Cypress1/index.html')
        cy.contains('Add Task').click()
        cy.get('#title').type("Task One")
        cy.get('#summary').type("Task One Description Summary")
        cy.get('#category').select("urgent")
        cy.get('.actions').contains("Add Task").click()
        cy.get('.task').should('have.length', 1)


        cy.contains('Add Task').click()
        cy.get('#title').type("Task two")
        cy.get('#summary').type("Task Two Description Summary")
        cy.get('#category').select("low")
        cy.get('.actions').contains("Add Task").click()
        cy.get('.task').should('have.length', 2)


        cy.contains('Add Task').click()
        cy.get('#title').type("Task Three")
        cy.get('#summary').type("Task Three Description Summary")
        cy.get('#category').select("important")
        cy.get('.actions').contains("Add Task").click()
        cy.get('.task').should('have.length', 3)


        cy.contains('Add Task').click()
        cy.get('#title').type("Task Five")
        cy.get('#summary').type("Task Five Description Summary")
        cy.get('#category').select("urgent")
        cy.get('.actions').contains("Add Task").click()
        cy.get('.task').should('have.length', 4)


        //low 
        cy.get("#filter").select('🟢 Low')
        cy.get('.task').should('have.length', 1)

        //urgent 
        cy.get("#filter").select('urgent')
        cy.get('.task').should('have.length', 2)

        //important 
        cy.get("#filter").select('important')
        cy.get('.task').should('have.length', 1)

        //All 
        cy.get("#filter").select('all')
        cy.get('.task').should('have.length', 4)


    })


    it('Shoould Validate the Inputs',()=>{
        
    })

})