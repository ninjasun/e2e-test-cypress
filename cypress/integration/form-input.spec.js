describe('Form input', () => {
  it('Focus the input on load', () => {
    cy.visit('/')
    cy.focused().should('have.class', 'new-todo')
  })
  it.only('Accept input ', () => {
    const typedText = 'New todo'
    cy.visit('/')
    cy.get('.new-todo')
      .type(typedText)
      .should('have.value', typedText)
  })
})
