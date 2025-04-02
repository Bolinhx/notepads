type Hero = {
    nome: String;
    vulgo: String;
    telefone: String;
};

function ligarPara(heroi: Hero){
    console.log("ligando para: "+ heroi.nome);
}

ligarPara({
    nome: "Bolinhx",
    vulgo: "Bernardo",
    telefone: "31319984712"
});