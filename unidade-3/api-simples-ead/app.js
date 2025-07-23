const express = require('express');
const cors    = require('cors');

const App = express()
const Port = 3000

App.use(cors(
    {
        origins: '*',
        methods: 'GET'
    }
))

App.get('/teste', (req, res) => {
    res.send('Olá mundo pela terceira vez!')
})

App.listen(Port, () => {
    console.log(`Servidor rodando na porta: ${Port}`)
})