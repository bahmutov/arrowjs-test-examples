function mount(template) {
  const element = document.querySelector('[data-cy-root]')
  template(element)
}

Cypress.Commands.add('mount', mount)
