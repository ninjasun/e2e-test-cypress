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
})
