*CALLBACKS*

            "i will call back later!"
Uma funcao Callback e a funcao que e passada como argumento para outra funcao

Isso permite que uma funcao chame outra e so rode assim que essa outra funcao termine

Ex setTimeout: 

Aqui chamamos um metodo setTimeout com temporisador de 1000 milisegundos(1seg)
apos corrido esse tempo ele executa a funcao interna

    setTimeout(() => {
        console.log("Waited 1 second")
    }, 1000);

Ex2 nested setTimeouts "callback hell":

Como o proprio nome diz aqui temos um "hell" em termos de confusao e que pode ir ao infinito

Colocamos varios metodos aninhados e um so executa depois que o outro termina

output : 3,2,1 (com o intervalo entre eles)

    setTimeout(() => {
        console.log('3');
        setTimeout(() => {
             console.log('2');
             setTimeout(() => {
                 console.log(1);
             }, 1000);
        }, 1000);
    }, 1000);

Ex3 Tratando excessoes (error first callback) readFile:

    fs.readFile('./test.txt', {'encoding: 'utf-8'}, (err, data) =>
    {
        if(err){
            console.error('ERROR');
            console.error(err);
        } else {
            console.erro('GOT DATA');
            console.log(data);
        }
    })


No frontend e muito comum o uso de callbacks nos "eventListeners" para executar metodos 

*PROMISSES*

            "I promisse a Result!"

Uma Promisse e um objeto que liga um Producing Code a um Consuming Code

        "Producing": um codigo que leva um tempo para executar(acredito que tenha uma forma melhor de exempificar do que "leva tempo")
        "Consuming": Um codigo que precisa esperar o resultado para executar.
a Promisse pode ser considerada como uma evolucao a idea de Callback, pois tenta evadir dos nested e ja roda "prometendo" um resultado e tambem sendo mais sucinta

Ex criando uma promise:
    
    const myPromise = new Promise((resolve,reject) => { 
        const rand = Math.Flor(Math.random()* 2);
        if( rand === 0){
            resolve(); //sucess case
        }
        else {
            reject(); //failed case
        }
    });

    myPromise
    .then(() => console.log('Sucess'))      //caso positivo .then
    .catch(() => console.error('something went wrong)) //caso negativo .catch

Ex Tratando excessoes readFile:

Comparando com o callback e visivel o tanto que isso poupa tempo e linha, trabalhando dessa forma me lembra ate streams do Java(sei que sao coisas diferentes)

    fs.promises
        .readFile('./test.txt', {enconding: 'utf-8})
        .then((data) => console.log(data))
        .cath((err) => console.error(err));
Ex Fetch with promises (Fetch e uma api do JS que retorna uma promise, usada para fazer requisicoes HTTP e processar respostas)

        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => cpmsole.error(err))

*ASYNC/AWAIT*

        "async and await promises easier to write"
async makes a function return a Promise

await makes a function wait for a Promise
        
        const loadFile = async () => {
            try{
                const data = await fs.promises.readFile('caminho_do_arquivo');
            }
            console.log(data);
            }catch(error){
                console.error(error);
        };
        loadFile();

Ex Fetch with async/await with and without error handling

        try{
            const fetchPokemon = async (id) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json(); //converte para json
            console.log(data);
        };
        }catch(error){
            console.error(error)
        }
        fetchPokemon(2);


           const fetchPokemon = async (id) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json(); //converte para json
        };
        fetchPokemon(2);
