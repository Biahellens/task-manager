![TaskManager](https://bitbucket.org/boxti-biahellens/boxti-fullstack-task-test/src/main/app/public/logo.svg)

# TaskManager

Projeto referente ao gerenciamento de uma lista de tarefas.

- [TaskManager](#TaskManager)
  - [Tecnologias](#tecnologias)
  - [Inicializando](#inicializando)
    - [api](#api)
    - [app](#app)

## Tecnologias

Para o desenvolvimento deste projeto, foi utilizado as seguintes tecnologias:

- [Node](https://nodejs.org/en/);
- [TypeScript](https://www.typescriptlang.org/);
- [Typeorm](https://typeorm.io/);
- [Express](https://expressjs.com/pt-br/);
- [jsonwebtoken](https://jwt.io/);
- [VueJS](https://vuejs.org/);
- [Pinia](https://pinia.vuejs.org//);
- [PostgreSQL](https://www.postgresql.org/);
- [Docker](https://www.docker.com/).

## Inicializando

O projeto foi construido de maneira desacoplada, sendo assim, o server desenvolvido totalmente desacoplado do cliente. E banco de dados foi construido em estrutura de conteiner com Docker.

### Banco de dados:

O desenvolvimento do nosso banco de dados em Postgres utilizamos da imagem do Postgres a partir do docker, que ficará disponivel na porta 5432. Para iniciar nosso banco de dados o primeiro passo é acessar a nossa pasta api e database:

```bash
$ cd api/database
```

Em seguida precisamos iniciar o container do PostgreSQL:

```bash
$ docker-compose up -d
```

agora precisamos criar nossas migrations no banco de dados:

```bash
$ cd ..
$ npm run migration:run
```

### API:

A nossa API foi construida utilizando o Node.js utilizando Express e TypeScript, e o TypeORM. Utilizei também do bycript para a encriptação de senhas. Antes de iniciar, precisa-se instalar as dependências, para isso utilizamos o npm como nosso gerenciador de dependencias e excutamos o seguinte comando no terminal:

```bash
$ cd api
$ npm install
```

agora, podemos estar inicializando com através do comando:

```bash
$ npm run dev
```

### APP:

O desenvolvimento do nosso App foi feito com VueJs utilizando Plinia com o template Typescript. Foi feito também o uso de cookies para armazenar nosso token para uso da aplicação. Antes de iniciar, precisa-se instalar as dependências, para isso utilizamos o npm como nosso gerenciador de dependencias e executamos o seguinte comando no termina:

```bash
$ cd app
$ npm install
```

agora, podemos estar inicializando com através do comando:

```bash
$ npm run serve
```

### Executando a aplicação

Agora com a aplicação configurada é possível acessa-la através da seguintes rotas:

#### APP
- http://localhost:8080/

#### API

- http://localhost:3000/
