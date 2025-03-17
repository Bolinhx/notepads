O Basico para poder desenvolver usando Node:

    1 - Um meio para navegar pelo projeto (IDE):
        VSCode
    2 - A Tecnologia responsavel e o gerenciador de pacotes
        NodeJs & NPM ou Yarn 
            ao instalar o Node dar um check na caixinha para instalar dependencias, apos o final da instalacao ele vai abrir o powershell e instalar uma serie delas(python,chocolatey,etc) pode demorar um pouco mas e essencial.

            Caso de algum erro o node pode nao rodar corretamente e voce vai ter de rodar o script denovo ele fica dentro da pasta "Chocolatey" em C:/ProgramData , acessado pelo terminal.

            Dependendo do seu sistema pode ser necessario autorizar a execucao de scripts. Voce vai descobrir isso ao rodar o comando "npm init" 

        Para conferir se foi instalado corretamente o node:
            "node -v" no terminal 
            "node "nome_do_arquivo"" no terminal para rodar o arquivo

Arquivos JS soltos nao sao um projeto Node!

Um projeto node tem como base um "arquivo empacotador" Package.json , esse arquivo tem como funcao conectar esses outros arquivos JS "soltos" e gerenciar tudo dentro do nosso projeto, dependencias,caminhos,etc

    1- Para inicializar um projeto node e criar um diretorio para ele(workspace)
    2- Dentro do workspace rodamos o comando "npm init", ele vai te fazer algumas perguntas para "setar" o projeto(nome, versao descricao, arquivo inicial, comando de teste, git repository,palavras chave, autor e licensa) ou "npm init -y" para pular essas perguntar e setar default
    3- E criado nosso arquivo Package.json com as informacoes
    4- Criar pasta SRC com todos os arquivos JS dentro dele, de fora somente arquivos de configuracao e outros diretorios

Para rodar temos os comandos 
    - node caminho_do_arquivo
    - node --watch caminh_do_arquivo (watch elimina o uso do "nodemon" e a necessidade de fechar e rodar o programa em cada mudanca que for feita)