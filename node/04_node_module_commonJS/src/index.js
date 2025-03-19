// const p = require("./services/products") //pode ser assim
const {getFullName} = require("./services/products") // ou assim, passando o nome dos metodos separados



async function main() {
    console.log("Ola meu nome e system")
    p.getFullName("408", "mousepad")
};

main();