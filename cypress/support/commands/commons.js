Cypress.Commands.add('validarMensagemToast', (mensagem) => {
    cy.get('.toast').should('have.text', mensagem);
})

Cypress.Commands.add('selecionarOpcaoCombobox', (label, opcao) => {
    cy.get(`label[for="${label}"]`).parent().as(label);
    cy.get(`@${label}`).click();
    cy.get(`@${label}`).contains(opcao).click();
})