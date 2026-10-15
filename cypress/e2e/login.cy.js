describe('Login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4000')
    cy.screenshot('login-page');

  })
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    
    cy.fixture('credenciais').then((login) => {
      cy.get('#username').type(login.valida.usuario)
      cy.get('#senha').type(login.valida.senha)
    })
    cy.get('#login-section > .btn').click()
    cy.get('h4').should('contain', 'Realizar Transferência')
  })

  it.only('Login com dados inválidos deve apresentar mensagem de erro', () => {
    cy.fixture('credenciais').then((login) => {
      cy.get('#username').type(login.invalida.usuario)
      cy.get('#senha').type(login.invalida.senha)
    })
    cy.get('#login-section > .btn').click()

    cy.get('.toast').should('be.visible').should('have.text', 'Erro no login. Tente novamente.')
  })
})