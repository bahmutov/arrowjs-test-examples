import { counter } from './counter'
it('counts', () => {
  cy.mount(counter)
  cy.contains('button', '0 arrows').click()
  cy.contains('button', '1 arrows').click()
  cy.contains('button', '2 arrows')
})
