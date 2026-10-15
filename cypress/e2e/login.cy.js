describe('Login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4000')

  })
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.get('#username').type('julio.lima')
    cy.get('#senha').type('123456')
    cy.get('#login-section > .btn').click()
    cy.get('h4').should('contain', 'Realizar Transferência')
  })

  it.only('Login com dados inválidos deve apresentar mensagem de erro', () => {
    cy.get('#username').type('julio.lima')
    cy.get('#senha').type('654321')
    cy.get('#login-section > .btn').click()

    cy.get('.toast').should('be.visible').should('have.text', 'Erro no login. Tente novamente.')
  })
})