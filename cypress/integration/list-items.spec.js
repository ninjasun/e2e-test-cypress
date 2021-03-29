const { _ } = Cypress

describe('List item behaviur', () => {
  it('Deletes an item', () => {
    cy.server()
    cy.route({
      method: 'DELETE',
      url: '/api/todos/*',
      response: {}
    }).as('delete')

    cy.seedAndVisit()
    cy.get('.todo-list li')
      .first()
      .find('.destroy')
      //.click({ force: true })
      .invoke('show')
      .click()

    cy.wait('@delete')
    cy.get('.todo-list li').should('have.length', 3)
  })

  it.only('Marks an item complete', () => {
    cy.server()
    cy.seedAndVisit()
    cy.fixture('todos').then(todos => {
      const target = todos[0]
      cy.route({
        method: 'PUT',
        url: `/api/todos/${target.id}`,
        request: _.merge(target, { isCompleted: true })
      }).as('update')
    })
    cy.get('.todo-list li')
      .first()
      .as('first-todo')

    cy.get('@first-todo')
      .find('.toggle')
      .as('checkbox')

    cy.get('@checkbox').click()
    cy.wait('@update')
    cy.get('@checkbox').should('be.checked')
    cy.get('@first-todo').should('have.class', 'completed')
    cy.get('.todo-count').should('contain', 3)
  })
})
