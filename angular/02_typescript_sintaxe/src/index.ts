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
// Ao iniciarmos as propriedades da classe ela vai dar erro se nao passarmos os valores
// OUUUU iniciarmos o construtor da classe

    //DATA MODIFIERS podem ser aplicados a METODOS e ATRIBUTOS
    // private so pode ser enxeregado dentro da classe
    // public valor default, enxergado por tudo e todos
    // protected so pode ser enxergado pela classe e pelas classses que herdam ela
class Character {
    protected name?: string; //se colocarmos o ? deixa esse atribnuto como opcional
    str : number;
    skill: number;

    constructor(name:string,str: number, skill:number){
        this.name = name;
        this.str = str;
        this.skill = skill;
    };

    atack() :void { //se quisermos dar um return precisamos definir o tipo do retorno
        console.log(`Attack with${this.str} points`);
    }
}

// a classe pai sempre e uma "superclass"
//entao dentro do construtor precisamos chamar super()
//SUBCLASSES ou heranca
class Mago extends Character{
    magicPoints : number;
    constructor(name: string, str: number, skill:number, magicPoints:number){
        super(name,str,skill) //o super deve ser passado antes (SEMPRE) dos atributos da classe filha
        this.magicPoints = magicPoints;
    }
}

//GENERICS
// assim como remedio generico, nao sabemos exato o nome, mas sabemos que e do tipo remedio tal
// com generics a gente deixa aberto essa recepcao mas tipamos ela para evitar erros
function concatArray<T>(...itens: T[]):T[]{
    return new Array().concat(...itens); // os "..." = spread que significa que aceita/retorna varios
}
    // inves de colocarmos ANY colocamos o T , entao ao chamarmos o metodo definimos o tipo 
const numArray = concatArray<number[]>([1,3,6], [24]);
const strArray = concatArray<string[]>(["bolinhx", "barbara"], ["24"]);

let dado:string = "ralph";
console.log(dado);

//DECORATORS
// para funcionar e preciso ativar "experimentalDecorators" no tsconfig

// funcionam quase que literalmente como o nome diz, "voce" decora algo
// acho que trigger e uma forma melhor de definir, "voce" decora o metodo
// e chama ele sempre que ativado o trigger

function exibirNome(target: any){
    console.log(target);
}

@exibirNome  //usa o @ parece ate anotacao la no java
class Funcionario{ }

//pode ser usado para sobescrever/OVERRIDE metodos ou em classes

