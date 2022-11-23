# Introdução #
>
A instalação do Knex consiste na incoorporação de suas funcionalidades ao ambiente de execução do Knex
do Node.js. 
>
>
Na instalação é usado o 'npm',o gerenciador de pacotes do Node.js.
>

## Instalação ##
>
Usar o comando abaixo para instalar o Knex.
>
>
```
$ npm install knex --save
```

## Instalação da API de um Banco de Dados ##
>
O Knex suporta o acesso aos principais Bancos de Dados como: Sqlite3, Mysql, MariaDB, PostgreSQL,
Oracle.
>

### Sqlite3 ###

#### Instalação da Biblioteca ####
>
```
$ npm install sqlite3
```
>

#### Conexão ao Banco Sqlite3 ####

>
O trecho de código javascript abaixo configura o knex para usar o banco de dados 
`sqlite3`.
>
>
```
const knex = require('knex')({
  client: 'sqlite3', // or 'better-sqlite3'
  connection: {
    filename: "./mydb.db"
  }
});
```
>




```
>