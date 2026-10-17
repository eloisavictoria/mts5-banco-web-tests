# Testes automatizados do Banco Web

Projeto de testes automatizados de interface com Cypress e JavaScript, desenvolvido para apresentar e praticar os estudos das aulas da mentoria de software do Julio de Lima.

## Componentes do projeto

- **Cypress**: ferramenta de automação dos testes end-to-end.
- **Testes E2E**: cenários de login e transferências em `cypress/e2e/`.
- **Custom commands**: ações reutilizáveis organizadas por assunto em `cypress/support/commands/`.
- **Fixtures**: dados de login usados pelos testes em `cypress/fixtures/credenciais.json`.
- **cypress-mochawesome-reporter**: gera relatórios da execução. O suporte e o plugin são registrados em `cypress/support/e2e.js` e `cypress.config.js`.

## Pré-requisitos

- Node.js e npm instalados.
- A API [banco-api](https://github.com/juliodelimas/banco-api) e a aplicação web [banco-web](https://github.com/juliodelimas/banco-web) em execução antes de rodar os testes.
- A aplicação web deve estar disponível em `http://localhost:4000`, endereço configurado como `baseUrl` em `cypress.config.js`. A aplicação também precisa conseguir acessar a API.

Inicie a API e a aplicação seguindo as instruções de seus respectivos projetos. Os testes não iniciam esses serviços automaticamente.

## Instalação

Na raiz deste repositório, instale as dependências definidas em `package.json`:

```bash
npm ci
```

## Execução

Com a API e a aplicação web em execução:

```bash
# Executa todos os testes no navegador em modo headless
npm test

# Executa os testes em modo headed
npm run cy:headed

# Abre a interface interativa do Cypress
npm run cy:open
```

## Testes automatizados

Os testes estão em `cypress/e2e/` e cobrem:

| Arquivo | Cenários |
| --- | --- |
| `login.cy.js` | Login com credenciais válidas permite entrar no sistema; login com credenciais inválidas apresenta mensagem de erro. |
| `transferencias.cy.js` | Transferência com dados válidos é realizada; para valores acima de R$ 5.000,00, a aplicação solicita autenticação por token. |

Os dados de login são lidos da fixture `cypress/fixtures/credenciais.json`. Atualize-a se as credenciais esperadas pelo ambiente de teste forem diferentes.

## Custom commands

Os comandos são carregados por `cypress/support/commands.js` e agrupados em arquivos dentro de `cypress/support/commands/`:

| Comando | Arquivo | Finalidade |
| --- | --- | --- |
| `cy.fazerLoginCredenciaisValidas()` | `login.js` | Lê da fixture e envia as credenciais válidas no formulário de login. |
| `cy.fazerLoginCredenciaisInvalidas()` | `login.js` | Lê da fixture e envia as credenciais inválidas no formulário de login. |
| `cy.validarMensagemToast(mensagem)` | `commons.js` | Verifica se o toast exibe exatamente a mensagem informada. |
| `cy.selecionarOpcaoCombobox(label, opcao)` | `commons.js` | Abre o combobox identificado pelo label e seleciona a opção indicada. |
| `cy.realizarTransferencia(contaOrigem, contaDestino, valor)` | `transferencias.js` | Seleciona as contas, preenche o valor e aciona a transferência. |

## Relatórios

O `cypress-mochawesome-reporter` é configurado como reporter do Cypress. Após a execução, consulte o relatório HTML em `cypress/reports/html/index.html`; capturas de tela de falhas podem ser salvas em `cypress/screenshots/`.
