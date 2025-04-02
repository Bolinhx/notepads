// tipos primitivos: boolean,number, string

let ligado: boolean = false;
let nome: string = "bolinhx";
let idade: number = 1.9; //o number aceita decimal
//null
//undefined
let nulo: null = null; //so aceita null
let indefindo: undefined = undefined; // mesma coisa do null
//tipos abrangentes: any, void
let retorno: void;
let retornoView: any ;
//objeto - sem previsibilidade (nao seguro/nao tipado)
let produto:object={  //ele aceita qualquer "coisa" desde que esteja entre chaves
                      //e com ses atributos 
    name: "bolinhx",
    cidade: "bh",
    idade: " 30",
}
//objeto tipado OUUUU uma structure/apanhado de objetos/classe(?)
type ProdutoLoja ={
    nome:string;
    preco:number;
    unidades:number;
};
//para usar criamos uma variavel do tipo da sctructure
let meuProduto: ProdutoLoja ={
    nome: "ovo",
    preco: 2.2,
    unidades:5,
}
//ARRAYs
//duas formas de declarar arrays de tipo unico
let dados: string[] = ["bolinhx","vivico","barbara"];
let dados2 : Array<string> = ["bolinhx","vivico","barbara"];
//array de tipo multiplo, aceita dois tipos
let infos: (string | number)[] = ["bolinhx", 233]; //nesses casos e melhor criar um objeto tipado

//TUPLAS
//funciona como um multitype POREM os objetos tem de ser passados na ordem definida
let boleto: [string,number,boolean] = ["agua",23.13,false];

//ARRAYS methods, aceita os mesmos do JS
//dados.map
//dados.pop
//dados.reduce
//dados.filter

//DATAS
let aniversario: Date = new Date("2025-04-02 05:00")
console.log(aniversario.toString());

//FUNCOES funcionam igual ao JS mas agora podemos tipar
function addNumber (x:number, y:number){ // <- aqui
    return x + y
};

function addToHello(name:string):string { //podemos tipar tambem o retorno
                                          //adicionando o : depois dos params
    return `Hello ${name}`;
};

function callToPhone(phone: number| string):number|string{ //definimos que ele aceita number ou string
    return phone;                                          //tambem aceita retornar object
}
//FUNCOES ASSINCRONAS
////uma funcao async sempre vai retornar uma PROMISE
//temos de definir de qual tipo e a primise, pode ser mais de 1
async function getDataBase(id:number):Promise<string|number>{
    return "felipe";   
  }

//INTERFACES
//funcionam parecidas com o type
// nao precisa do "=" depois do nome
//geralmente utilizada quando usada com classes mas funciona como type tambem
interface robot {
    readonly id: number; //pode OU nao ter propriedades 
    name: string;
}

// Como o JS lida com classes e interfaces
// Ao transpilar ele vira um objeto!
// A tipagem do TS e importante para nos na hora da compilacao para evitar erros
// e garantir as entradas 

//CLASSES "a forma"

