# Virtual Store Test

Esse projeto é um teste de automação de uma loja virtual usando o Cypress. Ele consiste em uma série de testes que verificam a funcionalidade da página de login, a adição de itens ao carrinho e a finalização da compra.

## Instalação

Para executar esse projeto, primeiro é necessário instalar o Cypress. Você pode fazer isso usando o gerenciador de pacotes npm com o seguinte comando:

```bash
npm install
```

## Arquivos

O projeto contém os seguintes arquivos:

- `constants/constants.js`: Define as constantes usadas no projeto, incluindo o URL da loja virtual, nome de usuário, senha, opções de classificação e itens disponíveis.
- `models/LoginPage.js`: Contém a classe que representa a página de login da loja virtual.
- `models/InventoryPage.js`: Contém a classe que representa a página de inventário da loja virtual.
- `models/CartPage.js`: Contém a classe que representa a página do carrinho de compras da loja virtual.
- `models/CheckoutPage.js`: Contém a classe que representa a página de finalização de compra da loja virtual.
- `e2e/saucedemoSpec.cy.js`: Contém os testes de integração para a loja virtual.

## Testes

Os testes são executados na página de inventário da loja virtual e incluem os seguintes casos:

- Verificar a existência dos itens em estoque.
- Verificar a classificação dos itens.
- Adicionar e remover itens do carrinho.
- Finalizar a compra.
- Verificar a existência de mensagens de erro para campos obrigatórios.
- Verificar se o nome fornecido para o campo de primeiro nome contém apenas letras.
- Verificar se o primeiro caractere do nome fornecido para o campo de primeiro nome é uma letra.
- Verificar se o campo de código postal aceita apenas 8 dígitos.

## Execução dos Testes

Para executar os testes, acesse a raiz do projeto e execute o seguinte comando no terminal:

```bash
npm run cypress:open
```

Isso abrirá a janela do Cypress Test Runner, onde você pode escolher qual teste executar.
