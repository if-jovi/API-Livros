//primeiro lugar a acessar na api

const express = require('express');//importa o pacote do express
const app = express();//cria uma instancia do express para a nossa api
const PORT = 3000;// cira uma constante para definir a porta onde a aplicação roda

app.use(express.json());

//cria um metodo de route que ao acessar a raiz 
//com metodo get, retorna ola mundo
app.get('/',(req,res) => {
    const hello = {
        message : 'Ola Mundo!'
    }
    return res.json(hello);
});

require('./routes')(app)

app.listen(PORT,()=> {
    console.log(`api rodando na porta ${PORT}`)
})