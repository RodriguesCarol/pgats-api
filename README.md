# PGATS-API

API REST para testes e automação, construída com Node.js e Express. Permite registro, login, consulta de usuários e transferência de valores, com regras específicas para duplicidade de usuários e transferências.

## Instalação

```bash
npm install
```

## Execução

```bash
node server.js
```

## Endpoints

- `POST /users/register`: Registra novo usuário
- `POST /users/login`: Realiza login
- `GET /users`: Lista usuários
- `POST /transfer`: Realiza transferência
- `GET /transfer`: Lista transferências
- `GET /api-docs`: Documentação Swagger

## Regras de Negócio
- Não permite usuários duplicados
- Login exige usuário e senha
- Transferências acima de R$ 5.000,00 só para favorecidos

## Documentação
Acesse `/api-docs` para visualizar a documentação Swagger.

## Testes
Para testar com Supertest, importe o `app.js` sem o método `listen()`.
