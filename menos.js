import express from 'express';
const servidor = express();

servidor.get('/calculadora/menos', (req, resp) => {
    let n1 = Number(req.query.n1)
    let n2 = Number(req.query.n2)

    let menos = n1 - n2
    resp.send({
        mensagem:menos
    })
})

servidor.listen(5001, () => console.log('API subiu na porta'))