import express from 'express';


const servidor = express()

servidor.get('/calculadora/somar', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)

    let soma = n1 + n2
    resp.send(`O resultado da soma é ${soma}`)
})

servidor.listen(5001, () => console.log('API subiu na porta 5001'))