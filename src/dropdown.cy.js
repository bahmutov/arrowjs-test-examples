/// <reference types="cypress" />
import { dropdown } from './dropdown'
import './dropdown.css'

it('dropdown', { viewportWidth: 200, viewportHeight: 200 }, () => {
  const items = ['one', 'two', 'three']
  cy.mount(dropdown(items))
  cy.contains('[data-selected]', 'one').should('be.visible').click()
  cy.contains('.dropdown-list li', 'two').click()
  cy.contains('[data-selected]', 'two').should('be.visible')
  cy.contains('one').should('not.be.visible')
})
