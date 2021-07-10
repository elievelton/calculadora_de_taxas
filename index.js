const express = require('express'); // importando o express
const app = express(); // iniciando o express


app.set('view engine', 'ejs'); // roda o redenrizador de HTML no Node
app.use(express.static('public')); // habilita usar arquivos estaticos no node
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// configurando as rotas das páginas
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/contato', (req, res) => {
    res.render('contato');
});
app.get('/comparativo', (req, res) => {
    res.render('comparativo');
});
app.get('/sobre', (req, res) => {
    res.render('sobre');
});
app.post('/enviofc', (req, res) => {
    var nome = req.body.nome;
    var email = req.body.email;
    var tel = req.body.tel;
    var conteudo = req.body.conteudo;
    res.send('Mensagem recebidao com sucesso!' + nome + email + tel + conteudo);
});

app.listen(4000, function(erro) { //colocando a aplicação para rodar e exibindo a confirmação 

    if (erro) {
        console.log("Aconteceu um erro");
    } else {
        console.log("Servidor iniciado com sucesso");
    }
})