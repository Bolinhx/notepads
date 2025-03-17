Node JS (A caixinha verde)
    Nao e uma linguagem! A linguagem e JS!
    Nao e um framework, e um RUNTIME(ambiente de execucao) de JS
    Node não e limitado, ele faz tudo que as outras tecnologias de backend fazem, depende de voce saber usar ele

E um RUNTIME criado em 2009 usando o motor de execucao do JS(JS Engine) de navegador (no caso o V8 do Chrome). 
Com o intuito de rodar o JS fora do navegador, no ambiente de servidor

Pequena timeline:

2010 lancada a primeira versao para a comunidade
2012 Criada a ONG  para evoluir e manter o projeto, OpenJS Foundadtion
2015 Lançamento da versao 0.12 com suporte oficial para o ECMAScript 6(Ate hoje se mantem atualizado sempre com os novos recursos do JS)
2016 Lançamento da versao 6, marcando a transicao para LTS versions
2020 Ryan Dahl (criador do node) aparece denovo e cria o Deno,"concorrente" do Node com o intuito de "dessa vez fanzendo do jeito que ele acha que o node deveria funcionar". 
    - Usa JS e funciona exatamente como o Node porem com algumas diferenças

------------
Como foi projetado e como funciona:

Para criar o Ryan Dahl pegou esse motor do chrome isolou ele, criou uma library chamada "libuv" que roda em C++ (linguagem de maquina) para entender e processar o que esta acontecendo no V8 e conseguir conversar com o dispositivo/sistema operacional. A junção do V8 com o libuv nessa "caixinha" e o NodeJS

O node carrega no seu nome e sua logo o proposito do ambiente que e rodar JS de uma forma independente e em pequenos "nodes" modulos que se encaixam e conversam. Por ser um abiente, desde que voce possa levar essa "caixinha" ele e capaz de executar em qualquer dispositivo, parecido com o conceito de Java de rodar em qualquer lugar que possa se intalar o Java Runtime


