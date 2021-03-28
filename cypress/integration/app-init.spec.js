describe('App initialization ', () => {
  const todos = [
    {
      id: 1,
      isComplete: false,
      name: 'Capra'
    },
    {
      id: 2,
      isComplete: false,
      name: 'C'
    },
    {
      id: 3,
      isComplete: false,
      name: 'Ciccioo'
    },
    {
      id: 4,
      isComplete: false,
      name: 'fourth'
    }
  ]
  it('Displays todos from API on load', () => {
    cy.server()
    cy.route('GET', '/api/todos', todos)
    cy.visit('/')
    cy.get('.todo-list li').should('have.length', 4)
  })
})
