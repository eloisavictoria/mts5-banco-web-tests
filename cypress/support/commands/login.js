Cypress.Commands.add('fazerLoginCredenciaisValidas', () => {
    cy.fixture('credenciais').then((login) => {
      cy.get('#username').type(login.valida.usuario)
      cy.get('#senha').type(login.valida.senha)
    })
    cy.get('#login-section > .btn').click()
})

Cypress.Commands.add('fazerLoginCredenciaisInvalidas', () => {
    cy.fixture('credenciais').then((login) => {
      cy.get('#username').type(login.invalida.usuario)
      cy.get('#senha').type(login.invalida.senha)
    })
    cy.get('#login-section > .btn').click();
})