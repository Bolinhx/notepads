**npm scripts**
*****
Funcionam como qualquer script, porem rodando dentro do package.json, podemos fazer scripts para rodarem antes, durante ou depois da execucao do app

Ex: Um script que quando chamado ja roda todos seus comandos de inicializacao do projeto

****

No package.json no bloco de "scripts" e sempre tem um "alias" antes dos passos do script

Ex: 

    "test": "echo \"Error: no test specified\" && exit 1"

****

Podem ser executados pelo comando `npm run nome_script` no terminal

No VSCode pode habilitar a opcao "npmscripts" que fica no menu do lado de "explorer"

Ou indo no package.json e clicar em "Run Script" encima do alias

***

*Criando Script*

E so ir la no package e dar um nome e os passos, exemplo:

    "iniciar": "node src/indexjs"

Se quiser que tenha mais passos e so colocar " && " depois de cada comando:

    "iniciar": "node src/indexjs && echo \"deu bom"\"

****

*Scripts comuns*

 prebuild "npm install"
 start:dev "node src/index.js"
 start:watch "node --watch src/index.js"