# Api

Aqui é onde fica a Api e o baco de dados do projeto, que foi construído em estrutura de contêineres com o Docker, incluindo no mesmo um banco de dados PostgreSQL.

## Banco de dados:

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

## API:

A nossa API foi construida utilizando o Node.js utilizando Express e TypeScript, e o TypeORM. Antes de iniciar, precisa-se instalar as dependências, para isso utilizamos o npm como nosso gerenciador de dependencias e excutamos o seguinte comando no terminal:

```bash
$ cd api
$ npm install
```

agora, podemos estar inicializando com através do comando:

```bash
$ npm run dev
```

### Executando a aplicação

Agora com a aplicação configurada é possível acessa-la através da seguintes rotas:

#### Rotas para o User

criar uma conta - Post
- http://localhost:3000/users/createdAccount

realizar login - Post
- http://localhost:3000/users/login

vizualizar todos os usuários - Get
- http://localhost:3000/users

#### Rotas para Tasks

visualizar todas as tarefas de todos os usuários - Get
- http://localhost:3000/tasks/allTasks

criar uma tarefa - Post
- http://localhost:3000/tasks/createTask

obter as tarefas de acordo com o usuário - Get
- http://localhost:3000/tasks/getTasksByUser

obtem quantas tarefas possuo de cada status - Get
- http://localhost:3000/tasks/getTaskStatusCount

mudar o status da tarefa para finish - Put
- http://localhost:3000/tasks/:id/finish

excluir uma tarefa - Delete
- http://localhost:3000/tasks/:id/deleted
