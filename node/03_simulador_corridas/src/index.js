
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
   return Math.floor(Math.random()* 6)+1;
};