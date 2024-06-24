const express = require('express');
const app = express();
app.use(express.json());

const weights = {
    "Nunca": 0,
    "Raramente": 2.5,
    "Às vezes": 5,
    "Frequentemente": 7.5,
    "Sempre": 10
};

app.post('/submit', (req, res) => {
    const { respostas } = req.body; // respostas será um array com as respostas do usuário

    let resultado = {
        amor: 0,
        alegria: 0,
        paz: 0,
        paciencia: 0,
        amabilidade: 0,
        bondade: 0,
        fidelidade: 0,
        mansidao: 0,
        dominioProprio: 0
    };

    respostas.forEach((resposta, index) => {
        switch (index) {
            case 0: resultado.amor = weights[resposta]; break;
            case 1: resultado.alegria = weights[resposta]; break;
            case 2: resultado.paz = weights[resposta]; break;
            case 3: resultado.paciencia = weights[resposta]; break;
            case 4: resultado.amabilidade = weights[resposta]; break;
            case 5: resultado.bondade = weights[resposta]; break;
            case 6: resultado.fidelidade = weights[resposta]; break;
            case 7: resultado.mansidao = weights[resposta]; break;
            case 8: resultado.dominioProprio = weights[resposta]; break;
        }
    });

    res.json(resultado);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
