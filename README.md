# NLW Connect - API de Gerenciamento de Recomendações

![Badge](https://img.shields.io/badge/Node.js-16+-green) ![Badge](https://img.shields.io/badge/Fastify-4.x-blue) ![Badge](https://img.shields.io/badge/TypeScript-4.x-blue) ![Badge](https://img.shields.io/badge/Swagger-API%20Docs-orange) ![Badge](https://img.shields.io/badge/License-MIT-yellow)

## Descrição

Este projeto é uma API de gerenciamento de eventos desenvolvida durante o evento **NLW Connect** da Rocketseat.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Fastify** - Framework web rápido e eficiente
- **TypeScript** - Tipagem estática para JavaScript
- **Swagger** - Documentação da API
- **Drizzle ORM** - Acesso ao banco de dados (PostgreSQL)
- **Redis** - Banco de dados em memória

## Funcionalidades

### Dia 01

- [x] Configuração base da API

### Dia 02

- [x] Criar usuários no banco de dados
- [x] Gerar o link de convite por usuário
- [x] Salvar acessos ao link de convite

## Como Rodar o Projeto

### Variáveis de Ambiente

Antes de executar o projeto, renomeie o arquivo `.env-example` para `.env` na raiz do projeto e configure as variáveis de ambiente conforme o necessário

### Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/galavernag/nlw-connect-nodejs.git
cd nlw-connect-nodejs

# Instale as dependências
npm install

# Execute os contâineres Docker
docker compose up -d

# Inicie o servidor
npm run dev
```

A API estará disponível em `http://localhost:3333`.

## Documentação da API

A documentação interativa do Swagger pode ser acessada após rodar o projeto em:

```
http://localhost:3333/docs
```

## Contribuição

1. Faça um fork do repositório
2. Crie uma branch para sua funcionalidade (`git checkout -b minha-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adicionando funcionalidade X'`)
4. Faça push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT.

## Autor

Desenvolvido por **Guilherme Galaverna** durante o NLW Connect 🚀

📌 Github: [galavernag](https://github.com/galavernag)
📌 LinkedIn: [galavernag](https://linkedin.com/in/galavernag)
