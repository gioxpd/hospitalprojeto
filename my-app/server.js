const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});


app.post('/login', (req, res) => {
    const { cpf, senha } = req.body;
    
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao ler os dados.');
            return;
        }

        const users = JSON.parse(data);
        const user = users.find(user => user.cpf === cpf && user.senha === senha);

        if (user) {
            res.status(200).json({ message: 'Login bem-sucedido' });
        } else {
            res.status(401).json({ message: 'CPF ou senha incorretos' });
        }
    });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
