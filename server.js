const { response } = require('express');
const express = require('express');
const mysql = require('mysql');
const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'morri'
    });
    connection.connect((err)=>{
        if (err) throw err
        console.log('Banco conectado com sucesso')    
    });
    app.get('/contatos/:id', (req, res) => {
     const id = parseInt(req.params.id);
     const result = connection.query('SELECT first_name, email, gender FROM denovo WHERE id = ?', [id], (err, rows) => {
        if (err) {
          console.error('Erro ao executar a query: ' + err.stack);
          res.status(500).send('Erro ao buscar contato pelo ID informado.');
          return;
        }
        const contato = rows[0];
        res.status(200).json({
          nome: contato.first_name,
        email: contato.email,
        telefone: contato.gender,
    });
  });
});
       
app.listen(3000, function () {
console.log('API rodando na porta 3000!');
});