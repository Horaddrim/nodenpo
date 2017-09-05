const seed = require('./seed/seed');
const juiz = require('./seed/juiz');

const jogo = () =>
{
    let jogador1 = new Jogador(seed());
    let jogador2 = new Jogador(seed());

    console.log(`VENCEDOR => ${juiz(jogador1,jogador2)}`);
};


setInterval(() => jogo(),2000);


class Jogador 
{
    constructor(escolha)
    {
        this.escolha = escolha
    }
}