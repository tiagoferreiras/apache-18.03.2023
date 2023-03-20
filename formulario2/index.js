// Importa as dependências necessárias
const express = require('express');
const mysql = require('mysql');

// Cria uma instância do Express
const app = express();

// Configura a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senha',
  database: 'nome_do_banco_de_dados'
});

// Define a rota para receber os dados do formulário de cadastro de cliente
app.post('/clientes', (req, res) => {
  // Extrai as informações do corpo da requisição
  const nome = req.body.nome;
  const telefone = req.body.telefone;
  const email = req.body.email;
  const lougradouro = req.body.lougradouro;
  const numero = req.body.numero;
  const complemento = req.body.complemento;
  const bairro = req.body.bairro;
  const cidade = req.body.cidade;
  const uf = req.body.uf;
  const cep = req.body.cep;
  const tipoCliente = req.body.tipoCliente;

  // Cria uma query SQL para inserir um novo cliente no banco de dados
  const query = `INSERT INTO clientes (nome, telefone, email, lougradouro, numero, complemento, bairro, cidade, uf, cep, tipo_cliente) VALUES ('${nome}', '${telefone}', '${email}', '${lougradouro}', '${numero}', '${complemento}', '${bairro}', '${cidade}', '${uf}', '${cep}', '${tipoCliente}')`;

  // Executa a query SQL no banco de dados
  connection.query(query, (error, result) => {
    if (error) {
      console.error('Erro ao inserir o cliente:', error);
      res.status(500).send('Erro ao inserir o cliente');
    } else {
      console.log('Cliente inserido com sucesso:', result);
      res.status(200).send('Cliente inserido com sucesso');
    }
  });
});

// Inicia o servidor da API
app.listen(3000, () => {
  console.log('API de cadastro de clientes rodando na porta 3000');
});