
//Objetos em JS sao representados com a declaracao da const seguidos de {} dentro colocamos seus atributos
const player1 = {
    NOME:"Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};
const player2 = {
    NOME:"Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};
//A funcao Math.random retorna um valor entre 0 e 1
//A funcao Math.floor tenta arredondar e converte para um inteiro, o +1 nos garante que esse numero va ate 6 
//POR PADRAO  o JS e SINCRONO!!! por isso usamos o async para ela nao executar junto com as outras 
async function rollDice(){
   return Math.floor(Math.random()*6)+1;
};

async function getRandomBlock(){
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;

        default:
            result = "CONFRONTO"
            break;
    };
    return result;
}
async function logRollResult(charName,block, diceResult, attribute){
    console.log(`${charName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult+attribute}`);
}

async function playRaceEngine(char1, char2){
    for (let round = 1; round  <= 5; round++){
        console.log(`🏁 Rodada ${round}`);

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)

        //roll dice
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //hability test
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;
   
    if(block === "RETA"){
        totalTestSkill1 = diceResult1 + char1.VELOCIDADE;
        totalTestSkill2 = diceResult1 + char2.VELOCIDADE;

        await logRollResult(char1.NOME,"VELOCIDADE", diceResult1, char1.VELOCIDADE)
        await logRollResult(char2.NOME,"VELOCIDADE", diceResult2, char2.VELOCIDADE)
    }
    if(block === "CURVA"){
        totalTestSkill1 = diceResult1 + char1.MANOBRABILIDADE;
        totalTestSkill2 = diceResult1 + char2.MANOBRABILIDADE;

        await logRollResult(char1.NOME,"MANOBRABILIDADE", diceResult1, char1.MANOBRABILIDADE)
        await logRollResult(char2.NOME,"MANOBRABILIDADE", diceResult2, char2.MANOBRABILIDADE)
    }
    if(block === "CONFRONTO"){
        totalTestSkill1 = diceResult1 + char1.PODER;
        totalTestSkill2 = diceResult1 + char2.PODER;

        console.log(`${char1.NOME} enfrentou ${char2.NOME}! 🥊`)
        // IFs ternarios
        await logRollResult(char1.NOME,"PODER", diceResult1, char1.PODER)
        await logRollResult(char2.NOME,"PODER", diceResult2, char2.PODER)

        // IFs ternarios

        // char2.PONTOS -=  totalTestSkill2 > totalTestSkill1 && char2.PONTOS > 0 ? 1 : 0;
        // char1.PONTOS -=  totalTestSkill1 > totalTestSkill2 && char1.PONTOS > 0 ? 1 : 0;

        // IF condicional dupla
        if (totalTestSkill1 > totalTestSkill2 && char1.PONTOS > 0){
            console.log(`${char1.NOME} venceu o confronto! ${char2.NOME} perdeu 1 ponto 🐢`)
            char2.PONTOS--;
        };

        if (totalTestSkill2 > totalTestSkill1 && char2.PONTOS > 0){
            console.log(`${char2.NOME} venceu o confronto! ${char1.NOME} perdeu 1 ponto 🐢`)
            char1.PONTOS--;
        };

        console.log(totalTestSkill1 === totalTestSkill2 ? "Confronto empatado! Nenhum ponto foi perdido" : "");

    }
//verificando o vencedor
    if( totalTestSkill1 > totalTestSkill2){
        console.log(`${char1.NOME} marcou um ponto!`);
        char1.PONTOS++;
    }else if(totalTestSkill2 > totalTestSkill1){
        console.log(`${char2.NOME} marcou um ponto!`);
        char2.PONTOS++;
    }else(totalTestSkill1 === totalTestSkill2)

    console.log("_________________________________________________")

    }
    
}

async function declareWinner(char1,char2) {
    console.log("Resultado final:")
    console.log(`${char1.NOME}: ${char1.PONTOS}`)
    console.log(`${char2.NOME}: ${char2.PONTOS}`)

    if(char1.PONTOS>char2.PONTOS){
        console.log(`\n ${char1.NOME} venceu a corrida! Parabens 🏆`)
    }else if (char2.PONTOS>char1.PONTOS) {
        console.log(`\n ${char2.NOME} venceu a corrida! Parabens 🏆`)
    }else{
        console.log("A corrida terminou em empate")
    }
}

(async function main(){
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} comecando\n`);   //funcao auto invocavel (function)();

    await playRaceEngine(player1,player2);
    await declareWinner(player1,player2);
})();