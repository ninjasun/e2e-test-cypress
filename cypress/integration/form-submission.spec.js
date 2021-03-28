describe('Form submission', () => {
  it('Adds a new todo item', () => {
    const newTodo = 'Buy Milk'
    cy.server()

    cy.route({
      method: 'POST',
      url: '/api/todos',
      response: { id: 123, name: newTodo, isCompleted: false }
    }).as('save')

    cy.seedAndVisit()

    cy.get('.new-todo')
      .type(newTodo)
      .type('{enter}')

    cy.wait('@save')
    cy.get('.todo-list li').should('have.length', 5)
  })

  it.only('Shows an error message for an error form submission', () => {
    cy.server()
    const newTodo = 'Test'
    cy.route({
      method: 'POST',
      url: '/api/todos',
      status: 500,
      response: {}
    }).as('save')

    cy.seedAndVisit()
    cy.get('.new-todo')
      .type(newTodo)
      .type('{enter}')

    cy.wait('@save')
    cy.get('.todo-list li').should('have.length', 4)
    cy.get('.error').should('be.visible')
  })
})
