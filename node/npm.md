**NPM**
***************
Toda linguagem tem o seu, funcionam do MESMO jeito quase que so muda o nome(nas entrelinhas tem questoes de otimizacao) NuGet(c#),Maven/Gradle(Java),Yarn(node),pip(python)...
***************
- No caso do NPM o comando para instalar pacotes no terminal e 
    "npm i" ou "npm install

Ao instalar um pacote o node cria um diretorio "node_modules" e um arquivo "package_lock.json" 

Dentro dessa pasta teremos os pacotes e seus respectivos codigos/dependencias/configuracoes/etc
    ENTAO TEM DE TER CUIDADO COM O QUE SAI INSTALANDO
    tanto pelo tamanho da pasta quanto a seguranca

E de bom tom colocar o "node_modules" no GITIGNORE para voce nao subir atoa tantos arquivos,

MAS COMO VOU RODAR O APP SEM MINHAS DEPENDENCIAS!!!????

    O package tem como funcao servir de "recipe" ali tem tudo que precisa ser baixado/instalado para rodar.
    No mundo real voce dificilmente vai criar/comecar um projeto, o normal e trabalhar encima de projetos ja criados entao quando esse app chega para voce voce roda o comando

    "npm install" ou "npm i"

    e ai tudo fica instalado e seu programa roda bonitinho

Voce falou de "Dev Dependencies" mas como separo ela das necessarias pro projeto??

    Na hora de instalar o pacote "npm i pocote_x" e so colocar depois do nome e so colocar a anotacao -D

Legal, mas e se eu instalar errado? Da pra remover ?

    Da sim, so rodar o comando "npm uninstall" nome_pacote

Se um pacote que eu uso atualizou, tenho de reinstalar ? 

    Voce pode rodar o comando "npm update nome_package" ou so "npm update" e atualiza tudo(CUIDADO AQUI)

***************
Node Package Manager

  - LITERALMENTE o que o nome diz
  
Mas o que e um PACKAGE?

    Empacotamento, fechadinho pronto pra uso. Pode ser importado e utilizado em varios projetos mantendo sua estrutura MAAaaas! podendo se adequar a seu projeto... se tornando uma DEPENDENCIA!!

Por que dependencia?

    Porque agora esse projeto DEPENDE desse package para funcionar

E por que gerenciar esses pacotes?

    Porque podemos usar 0,1,2 ate milhares(nao faca isso) desses pacotes e o NPM(ou qualquer gerenciador) mantem isso tudo organizado, versionado e editavel.

OK! aonde ficam esses pacotes?

    No caso do NPM existe o npmjs.com que funciona como um "google" de packages, tem os packages publicos e tambem oferece um servico para armazenar seus pacotes privados.
    Os pacotes normalmente tem uma documentacao, licensa, etc

**************************

Dev Dependencies

    Ajudam no momento no desenvolvimento e nao tem necessidade de subirem junto do codigo para producao ou qualquer outra etapa, evitar peso e processamento desnecessario. Ex ao comprar um bolo voce nao precisa mandar junto a forma, so do bolo e da embalagem

