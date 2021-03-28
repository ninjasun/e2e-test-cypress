describe('Form input', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Focus the input on load', () => {
    cy.focused().should('have.class', 'new-todo')
  })
  it.only('Accept input ', () => {
    const typedText = 'New todo'

    cy.get('.new-todo')
      .type(typedText)
      .should('have.value', typedText)
  })
})
