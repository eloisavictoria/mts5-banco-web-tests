describe('Transferências', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fixture('credenciais').then((login) => {
        cy.get('#username').type(login.valida.usuario)
        cy.get('#senha').type(login.valida.senha)
        })
        cy.get('#login-section > .btn').click();
    })
    it('Deve transferir quando informo dados e valor válidos', () => {
        cy.get('label[for="conta-origem"]').parent().as('contaOrigem');
        cy.get('@contaOrigem').click();
        cy.get('@contaOrigem').contains('Maria Oliveira com saldo de R$ 24681.00 (Ativa)').click();
    
        cy.get('label[for="conta-destino"]').parent().as('contaDestino');
        cy.get('@contaDestino').click();
        cy.get('@contaDestino').contains('João da Silva com saldo de R$ 13319.00 (Ativa)').click();
    
        cy.get('#valor').type('150');  
        cy.contains('button', 'Transferir').click();

        cy.get('.toast').should('have.text', 'Transferência realizada!');
    })

})