/// <reference types="cypress" />
import { dropdown } from './dropdown'
import './index.css'
import './dropdown.css'
import { html } from '@arrow-js/core'

it('dropdown', { viewportWidth: 200, viewportHeight: 200 }, () => {
  const planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
  ]

  cy.mount(dropdown(planets))
  cy.contains('[data-selected]', 'Mercury').should('be.visible').click()
  cy.contains('.dropdown-list li', 'Jupiter').click()
  cy.contains('[data-selected]', 'Jupiter').should('be.visible')
  cy.contains('Mercury').should('not.be.visible')
})

it(
  'shows three dropdowns',
  { viewportHeight: 300, viewportHeight: 1000 },
  () => {
    const planets = [
      'Mercury',
      'Venus',
      'Earth',
      'Mars',
      'Jupiter',
      'Saturn',
      'Uranus',
      'Neptune',
    ]

    const rivers = ['Amazon', 'Danube', 'Mississippi', 'Nile', 'Yangtze']

    const cities = [
      'Atlanta',
      'Berlin',
      'London',
      'Los Angeles',
      'Moscow',
      'New York',
      'Rome',
    ]

    cy.mount(
      html` <ul class="dropdown-demo">
        <li>${dropdown(planets)}</li>
        <li>${dropdown(rivers)}</li>
        <li>${dropdown(cities)}</li>
      </ul>`,
    )
    cy.log('**Mercury is selected first**')
    cy.get('.dropdown-demo .dropdown')
      .first()
      .find('li[data-selected=true]', 'Mercury')
      .should('be.visible')
    cy.log('**open river dropdown')
    cy.get('.dropdown-demo .dropdown')
      .eq(1)
      .click()
      .find('.dropdown-list')
      .should('have.attr', 'data-is-open', 'true')
      .contains('li', 'Nile')
      .should('be.visible')
  },
)
