const seed = require('seed-random');

let number = seed(Date.now());

const jogada = () => {
    let papel = number();
    let pedra = number();
    let tesoura = number();

    if(papel > pedra && papel > tesoura) {
        console.log(`Papel => ${papel}`);
        return "Papel";
    } else if(pedra > papel && pedra > tesoura) {
        console.log(`Pedra => ${pedra}`);
        return "Pedra";
    } else if(tesoura > pedra && tesoura > papel) {
        console.log(`Tesoura => ${tesoura}`);
        return "Tesoura";
    }
}

module.exports = jogada