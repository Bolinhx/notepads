***Criando um projeto Angular***

```ng new nome_projeto``` criar um novo projeto

***ESTRUTURA ANGULAR***
**CONFIG**
```tsconfig.json``` configuracoes do TS


ambos funcionam como configuracao do TS porem em ambientes diferentes, seja teste ou prod, tambem e possivel criar um config com um comportamento do jeito que voce quiser, normalmente herdam o tsconfig
``` 
    | tsconfig.app.json <-- quando ja esta publicada e rodando em nuvem
    | tsconfig.spec.json <-- quando queremos rodar testes ex: usando jasmine
    
```
```angular.json``` assim como o tsconfig, mas aqui as configuracoes do angular em si

```editorconfig``` configura comportamentos do editor de codigo, ajuda a manter a consistencia do codigo e padronizar

```.vscode``` configura comportamentos do vscode, recomenda exrtensoes etc... 

**APP FILES**./src

```styles.css``` pagina de estilos global do projeto

```main.ts``` principal

```index.html``` arquivo onde todo nosso projeto e injetado apos a transcricao

```.gitkeep``` pastas que caso estejam vazias o git nao ignora elas

**APP FILES**./src/app

Aonde trabalharemos maior parte do tempo

```arquivos component``` um arquivo so dividido em 4 onde trabalharemos com os componentes

```app.config``` logica dentro da programacao

```app.routes``` autorizacao de rotas de usuario

***OK!? COMO RODAR???***

o framework funciona como um lego, facilita para gente montar o projeto e na hora que queremos rodar ele COMPILA nosso codigo e transforma em uma forma que o navegador entenda

**PARA RODAR**
```ng serve``` | ```ng s``` | ```ng s -o``` | ```npm run start``` builds and serves" sua aplicacao(na primeira vez pode demorar um pouco) e deixa em "watch"/liveserver

**PARA BUILDAR**

```ng build``` | ```ng b``` compila a aplicacao em um diretorio pre definito
