***Arrow Function***

Sao uma forma mais concisa de escrever funcoes em JS.

Introduzidas no EcmaScript6(2015) e oferecem uma sintaxe mais curta e simples, uteis para funcoes anonimas

Utilizam a sintaxe ()=>

*FUNCAO TRADICIONAL*

         function soma(a,b){
            return a+b;
         };

*ARROW FUNCTION*

        const soma = (a,b) => {
            return a+b;
        };

A palavra "function" e removida e foi adicionado a arrow ( => ) entre os parametros e o corpo

Existem formas de simplificar ainda mais a ArrowFunction

Uma delas e quando a funcao SO TEM UMA LINHA de retorno ficando:

        const soma = (a,b) => a+b; //elimina o uso dos {} e do return

Arrowfunction sem parametros :

    const digaOi = () => 'Oi!';

Arrowfunction com UM parametro :

    const quadrado = n => n*n; //elimina o uso dos ()

Os parenteses so sao utilizados quando NAO ha parametros ou acima de DOIS

A verdadeira vantagem da sintaxe simplificada das ArrowFunction se tornam mais evidentes em contextos onde funcoes anonimas sao usadas frequentemente, como nos callbacks

Exemplo com funcao tradicional:

    const numeros = [1,2,3,4,5];

    const quadrado = numeros.map(function (numero){
        return numero * numero;
    });

Exemplo com ArrowFunction:

    const quadrado = numeros.map(numeros => numero*numero);