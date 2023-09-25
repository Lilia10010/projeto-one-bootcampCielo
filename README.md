# Ada Ecommerce

Esse projeto foi desenvolvido durante o Bootcamp Ada+Cielo 2023, utilizando Next.js (React, TypeScript) e o framework de estilos Material-UI.

## 🔨 Funcionalidades do projeto
- Interface com dois temas: Dark e Light, com opção de escolha dinâmica pelo usuário.
- Lista de produtos retornados da API, com as seguintes informações para cada item: imagem, nome, preço, categoria e avaliação.
- Ao clicar em um item, um modal é aberto, exibindo todas as informações do produto e um campo editável para adicionar a quantidade desejada ao pedido.
  - Possibilidade de navegar entre os produtos usando as setas do teclado (direita e esquerda) no modal.
  - Botões "adicionar" e "remover" no modal para ajustar a quantidade do pedido.
- Ao adicionar um item, um carrinho de compras é exibido com um badge mostrando a quantidade de itens adicionados ao pedido.
  - Os dados do pedido são persistidos no navegador do cliente.
- Barra superior com campo de pesquisa para buscar produtos na API.
  - Botão "atualizar" para recarregar a lista de produtos.

## 🧰 Stack Tecnológica
- Next.js
- React
- TypeScript
- Material-UI

## 🏃‍♀️ Executando o Projeto
Para abrir e rodar o projeto, siga os passos abaixo:

1. Instale as dependências:
  ```bash
    npm install
  ```

2. Crie e configure o arquivo `.env` seguindo o template do arquivo `.env.example` e coloque a url da API. Você pode fazer isso manualmente ou executar o seguinte comando e preencher as variáveis de ambiente conforme necessário:
  ```bash
    cp .env.example .env
  ```

3. Inicie o servidor de desenvolvimento:
  ```bash
    npm run dev
  ```

## 🎨 Design System
- [Figma: Material-UI v.1 by Fively (Cópia)](https://www.figma.com/file/iJsu1HirhuyuEMvTLIE4xI/Material-UI-v.1-by-Fively-(Copy)?type=design&node-id=0-1&mode=design)
- [Material-UI](https://mui.com/)

## Deploy 🚀

- Webapp: [https://thalitaleandra.github.io/projeto-one-bootcampCielo/]
- API: [https://ada-cielo-api.vercel.app/](https://ada-cielo-api.vercel.app/)

## 📚 Histórico do projeto
- Na primeira etapa do bootcamp, definimos e dividimos as tarefas utilizando a metodologia ágil Kanban e a ferramenta Trello. O grupo foi composto por Thalita Leandra, Samuel Teixeira e Lília Paula. Além disso, começamos a montar a interface do projeto usando o Figma.
- Nas aulas subsequentes, seguimos com o desenvolvimento do projeto, implementando funcionalidades e refinando a interface.

## 👥 Grupo

| [![Thalita Leandra](https://avatars.githubusercontent.com/u/52637455?s=160)](https://github.com/thalitaleandra) | [![Samuel Teixeira](https://avatars.githubusercontent.com/u/91707483?s=160)](https://github.com/samuelmteixeira) | [![Lília Paula](https://avatars.githubusercontent.com/u/25871372?s=160)](https://github.com/Lilia10010) |
|:---:|:---:|:---:|
| [Thalita Leandra](https://github.com/thalitaleandra) | [Samuel Teixeira](https://github.com/samuelmteixeira) | [Lília Paula](https://github.com/Lilia10010) |


## Saiba Mais 📚

Para aprender mais sobre o Next.js, confira os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre os recursos e a API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.
