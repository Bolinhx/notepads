function ligar(heroi){
    console.log("ligando para :"+ heroi.telefone);
}

ligar({
    nome: "Bolinhx",
    vulgo: "Bernardo",
    telefone: "31 939393121" // se eu rodar ele vai passar o numero do telefone,
                            // se eu apagar o telefone ele nao vai acusar erro e
                            // vai passar um Undefined e voce so vai ver isso ao rodar
})