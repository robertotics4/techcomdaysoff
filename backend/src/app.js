// Configurando a porta padrão
const port = process.env.port || 3000;

// Recebendo as configurações do servidor
const app = require('./config/server');

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});