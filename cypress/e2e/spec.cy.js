it('increments', () => {
  cy.visit('/')
  cy.contains('button', '0 arrows').click()
  cy.contains('button', '1 arrows').click()
  cy.contains('button', '2 arrows')
})
