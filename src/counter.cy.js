import { counter } from './counter'

it('increments the count', () => {
  cy.mount(counter)
  cy.contains('button', 'Fired 0 arrows').click()
  cy.contains('button', 'Fired 1 arrows').click()
  cy.contains('button', 'Fired 2 arrows')
})
