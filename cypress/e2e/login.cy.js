describe('Login', () => {

  beforeEach(() => {
    cy.visit('/');
  //  cy.env(['APP_URL']).then(({ APP_URL }) => {
  //   cy.visit(APP_URL)
  //   //cy.screenshot('login-page')
  // })
  })
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.fazerLoginCredenciaisValidas();
    cy.validarMensagemToast('Realizar Transferência');
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    cy.fazerLoginCredenciaisInvalidas();
    cy.validarMensagemToast('Erro no login. Tente novamente.');
  })
})