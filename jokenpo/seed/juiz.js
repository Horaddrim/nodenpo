const julgar = (jogador1, jogador2) => 
{
    let escolha1 = jogador1.escolha;
    let escolha2 = jogador2.escolha;

    if(testaPapel(escolha1) && testaPedra(escolha2)) {
        return "Jogador1";
    } else if(testaPedra(escolha1) && testaPapel(escolha2)){
        return "Jogador2";
    } else if(testaTesoura(escolha1) && testaPapel(escolha2)){
        return "Jogador1";
    } else if(testaPapel(escolha1) && testaTesoura(escolha2)){
        return "Jogador2";
    } else if(testaPedra(escolha1) && testaTesoura(escolha2)){
        return "Jogador1";
    } else if(testaTesoura(escolha1) && testaPedra(escolha2)){
        return "Jogador2";
    } else if(testaPapel(escolha1) && testaPapel(escolha2)){
        return "Empate";
    } else if(testaPedra(escolha1) && testaPedra(escolha2)){
        return "Empate";
    } else if(testaTesoura(escolha1) && testaTesoura(escolha2)){
        return "Empate";
    }
};


let testaPedra = (escolha) => 
{
    if(escolha == "Pedra")
    {
        return true;
    }
    return false;
};

let testaPapel = (escolha) => 
{
    if(escolha == "Papel")
    {
        return true;
    }
    return false;
};

let testaTesoura = (escolha) => 
{
    if(escolha == "Tesoura")
    {
        return true;
    }
    return false;
};

module.exports = julgar;