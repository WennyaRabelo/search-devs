# README - Instalação e Uso da Aplicação Next.js

Este README descreve os passos necessários para instalar e executar a aplicação Next.js, bem como lista as bibliotecas utilizadas no projeto.

## Pré-requisitos

Para executar esta aplicação, você deve ter o Node.js 18+ instalado em sua máquina. Você também deve ter o Yarn globalmente instalado. Você pode baixar o Node.js em [nodejs.org](https://nodejs.org/) e instalar o Yarn usando o comando:

```bash
npm install -g yarn
```

## Instalação

1. Clone este repositório em sua máquina local:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
```

2. Navegue até o diretório raiz do projeto:

```bash
cd seu-projeto
```

3. Instale as dependências do projeto usando o Yarn:

```bash
yarn
```

## Uso

Para executar a aplicação localmente em modo de desenvolvimento, use o seguinte comando:

```bash
yarn dev
```

Isso iniciará a aplicação em `http://localhost:3000`.

Para criar uma versão de produção da aplicação, utilize o seguinte comando:

```bash
yarn build
```

E para executar a aplicação em modo de produção após a construção, execute:

```bash
yarn start
```

Agora a aplicação estará acessível em `http://localhost:3000`.

## Bibliotecas Utilizadas

A aplicação faz uso das seguintes bibliotecas:

- **styled-components**: Utilizada para estilizar a aplicação usando CSS-in-JS.

- **@mui/material**: Usada para auxiliar na criação do layout em grid das páginas.

- **@mui/icons-material**: Fornecendo os ícones utilizados na aplicação.

- **date-fns**: Utilizada para auxiliar na formatação de datas.