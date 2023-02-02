/// <reference types="cypress" />

it('increments the count', () => {
  cy.visit('/')
  cy.contains('button', 'Fired 0 arrows').click()
  cy.contains('button', 'Fired 1 arrows').click()
  cy.contains('button', 'Fired 2 arrows')
})
