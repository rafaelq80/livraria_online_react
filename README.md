# Projeto Livraria Online - Frontend com React

<br />

<div align="center">     
     <img src="https://i.imgur.com/AzshGmS.png" title="Livraria Online" width="50%"/>
</div> 


<br />

<div align="center">   
    <img src="https://img.shields.io/github/languages/top/rafaelq80/livraria_online_react?style=flat-square" />
    <img src="https://img.shields.io/github/repo-size/rafaelq80/livraria_online_react?style=flat-square" />   
    <img src="https://img.shields.io/github/languages/count/rafaelq80/livraria_online_react?style=flat-square" />
    <img src="https://img.shields.io/github/last-commit/rafaelq80/livraria_online_react?style=flat-square" />
    <img src="https://img.shields.io/github/issues/rafaelq80/livraria_online_react?style=flat-square" />
    <img src="https://img.shields.io/github/issues-pr/rafaelq80/livraria_online_react?style=flat-square" />
    <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=flat-square" /> 
</div>
<br />

## 1. Descrição



O **Livraria Online - Frontend com React** é uma aplicação web desenvolvida com **React** e **TypeScript**, criada para consumir e interagir com uma API REST desenvolvida com **Spring Boot**, chamada **livraria**.

A aplicação oferece uma interface para o gerenciamento de uma livraria virtual, permitindo o cadastro, a consulta, a atualização e a exclusão dos recursos **Usuário**, **Categoria** e **Produto**.

Os produtos representam os livros cadastrados na livraria e são organizados por categorias. Os usuários podem acessar a aplicação e interagir com os recursos disponíveis de acordo com as funcionalidades implementadas.

### Funcionalidades

1. Cadastro e login de usuários.
2. Autenticação de usuários utilizando token JWT.
3. Listagem e gerenciamento de produtos.
4. Cadastro, edição e exclusão de produtos.
5. Listagem e gerenciamento de categorias.
6. Cadastro, edição e exclusão de categorias.
7. Associação entre produtos e categorias.
8. Navegação entre páginas com React Router DOM.
9. Consumo da API REST com Axios.
10. Estilização da interface com Tailwind CSS.

<br />

## 2. Autenticação e Validação de Token JWT

### Fluxo de Autenticação

1. O usuário realiza o cadastro ou login na aplicação.
2. Durante o login, o usuário informa suas credenciais.
3. A aplicação envia os dados para a API **livraria**.
4. A API retorna um token **JWT** após a autenticação.
5. O token é armazenado na aplicação para ser utilizado nas requisições autenticadas.
6. As rotas protegidas validam a autenticação antes de permitir o acesso aos recursos.

### Controle de Autenticação

* Usuários não autenticados podem ser redirecionados para a página de login.
* O token JWT é utilizado para identificar o usuário autenticado nas requisições à API.
* Caso o token seja inválido ou expire, o usuário deverá realizar uma nova autenticação.

<br />

## 3. Recursos da API

A aplicação consome uma API REST chamada **livraria**, desenvolvida com **Spring Boot**.

Os principais recursos utilizados pela aplicação são:

| Recurso       | Descrição                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Usuário**   | Representa os usuários cadastrados na aplicação e é utilizado nos processos de cadastro e autenticação.            |
| **Categoria** | Representa as categorias utilizadas para organizar os produtos da livraria.                                        |
| **Produto**   | Representa os produtos cadastrados na livraria, incluindo informações como título, autor, preço, foto e categoria. |

<br />

## 4. Tecnologias Utilizadas

| Tecnologia           | Finalidade                                            |
| -------------------- | ----------------------------------------------------- |
| **React**            | Biblioteca JavaScript para construção da interface    |
| **TypeScript**       | Superset do JavaScript que adiciona tipagem estática  |
| **Vite**             | Ferramenta de build e desenvolvimento                 |
| **Tailwind CSS**     | Estilização da interface com classes utilitárias      |
| **Axios**            | Consumo da API REST                                   |
| **React Router DOM** | Gerenciamento das rotas da aplicação                  |
| **Context API**      | Gerenciamento de estados globais, como autenticação   |
| **Spring Boot**      | Framework utilizado no desenvolvimento da API Backend |
| **JWT**              | Autenticação baseada em tokens                        |

<br />

## 5. Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter instalado:

* Node.js
* NPM
* Git
* Visual Studio Code ou outro editor de código
* A API Backend **livraria**, desenvolvida com Spring Boot

<br />

## 6. Como executar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/rafaelq80/livraria_online_react.git
```

### 2. Acesse a pasta do projeto

```bash
cd livraria_online_react
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a URL da API

Verifique a configuração da URL base utilizada pelo Axios.

Exemplo:

```typescript
const api = axios.create({
  baseURL: 'http://localhost:8080'
})
```

Caso o projeto utilize variáveis de ambiente, configure o arquivo `.env`:

```env
VITE_API_URL=http://localhost:8080
```

### 5. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
```

### 6. Acesse a aplicação

Por padrão, o Vite disponibiliza a aplicação no endereço:

```text
http://localhost:5173
```

<br />

## 7. Integração com a API Backend

O frontend se comunica com a API REST **livraria**, desenvolvida com **Spring Boot**.

A API é responsável pelo gerenciamento dos recursos:

* Usuário
* Categoria
* Produto

A comunicação entre o frontend e o backend é realizada por meio de requisições HTTP utilizando a biblioteca **Axios**.

Exemplo de configuração do serviço:

```typescript
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8080'
})
```

A URL base da API pode ser configurada diretamente no serviço do Axios ou por meio de variáveis de ambiente.

<br />

## 8. Estrutura de Diretórios

A estrutura do projeto segue uma organização semelhante à apresentada abaixo:

```text
src/
│
├── assets/           → Imagens, ícones e outros arquivos estáticos
├── components/       → Componentes reutilizáveis da aplicação
├── contexts/         → Gerenciamento de estados globais
├── models/           → Interfaces e tipos TypeScript
├── pages/            → Páginas da aplicação
├── services/         → Configuração do Axios e comunicação com a API
├── utils/            → Funções auxiliares
│
├── App.tsx           → Componente principal da aplicação
├── main.tsx          → Ponto de entrada da aplicação
└── index.css         → Estilos globais e configurações do Tailwind CSS
```

<br />

## 9. Principais Páginas

A aplicação possui páginas voltadas ao gerenciamento dos recursos da livraria.

### Usuário

* Cadastro de usuário.
* Login.

### Categoria

* Listagem de categorias.
* Cadastro de categorias.
* Edição de categorias.
* Exclusão de categorias.

### Produto

* Listagem de produtos.
* Cadastro de produtos.
* Edição de produtos.
* Exclusão de produtos.

<br />

## 10. Funcionalidades Futuras

Algumas possíveis evoluções para o projeto são:

- [ ] Upload de imagens para os produtos.
- [ ] Sistema de busca e filtros de produtos.
- [ ] Paginação.
- [ ] Melhoria da responsividade.
- [ ] Validações de formulários com React Hook Form.
- [ ] Feedback visual para operações realizadas na aplicação.
- [ ] Testes unitários e de integração.
- [ ] Melhorias na acessibilidade.
- [ ] Dashboard administrativo.

<br />

## 11. Contribuição

Contribuições são bem-vindas!

Caso encontre algum problema ou tenha sugestões de melhorias:

* Abra uma **issue**.
* Envie um **pull request**.
* Compartilhe sugestões e melhorias para o projeto.

<br />

## 12. Contato

Desenvolvido por **Rafael**.

Dúvidas ou sugestões podem ser enviadas por meio do GitHub ou pelas issues do repositório.
