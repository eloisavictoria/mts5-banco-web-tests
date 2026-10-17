describe('Transferências', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fazerLoginCredenciaisValidas();
    })
    it('Deve transferir quando informo dados e valor válidos', () => {
        cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '120');
        cy.validarMensagemToast('Transferência realizada!');
    })

    it('Deve solicitar token para valores acima de R$5000', () => {
       cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '6000');
       cy.validarMensagemToast('Autenticação necessária para transferências acima de R$5.000,00.');
    })

})