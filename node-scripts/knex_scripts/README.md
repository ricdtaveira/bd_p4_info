# Configuração e Uso do Knex

#### 1) Criar uma pasta knex_scripts 
```bash
mkdir knex_scripts
```
#### 2) Entrar na pasta criada
```bash
cd knex_scripts
````

#### 4) Criar o arquivo package.json
```bash
npm init -y
````
   O Arquivo **package.json** configura um projeto e principalmente
   identifica as dependências do mesmo. 

   Verificar a configuração do projeto abrindo o arquivo **package.json**. 

#### 5) Instalar as dependencias que serão usadas no projeto.
```bash
npm i -s knex sqlite3 sqlite
```
   Verificar no arquivo **package.json** se foram incluídas as dependencias
   anteriormente instaladas.

#### 6) Executar o comando para crair o arquivo knexfile.js
```bash   
npx knex init
````
#### 7) Executar o comando de criação de migration para cada tabela
```bash   
npx knex migrate:make TB_PERFIS
npx knex migrate:make TB_USUARIOS
npx knex migrate:make TB_USUARIOS_PERFIS
```   
   Observar a nomenclatura do nome dos arquivos criados.

