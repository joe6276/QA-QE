/// <reference types="Cypress" />

let user=[
  {
    "id": "1",
    "password": "John1234",
    "email": "john@example.com"
  }
]

let token=''// Test 1
// forgotpassword
// /reset password -- new password

//new password/ reset the database
//reset 

describe('template spec', () => {

  // beforeEach(()=>{
  //   cy.task("seedData")
  // })


it("Should Login successfully", ()=>{
  cy.visit('http://localhost:1234')
  cy.get('[data-cy="email_input"]').type('john@example.com')
  cy.get('[data-cy="password-input"]').type('John1234')
  cy.get('[data-cy="login-btn"]').click()
  cy.get('[data-cy="message-body"]').contains("Login Success")
  // cy.getAllCookies("cokkiesession").its('value').should('not.be.empty')
})

it("Should return something..", ()=>{
cy.request({
  method:'GET',
  url:'http://localhost:4000/users?email=john@example.com',
  // body:{
  //   email:''
  // }
  // headers:{
  //   token:token
  // }
}).then(res=>{
  expect(res.status).to.eq(200)
  expect(res.body).to.be.an('array')
  expect(res.body[0]).to.have.property('email',user[0].email)
  token=res.body[0].email
})
})
})


// signup
// login 
// adding to cart -several items
// Cart
//checkout = message

//Admin
// login
// addItem 
// test item added

