***web components***

**A diferenca entre Elements e WebComponents**
*******************

Elementos sao os ```<h1>,<p>,<div>``` e WebComponents e um conjunto encapsulado de elementos

```
//cada <> e um elemento e aqui temos um conjunto

    <div class="container">

        <div class="card_left"> 
            <span>Bolinhx</span>
            <h1>Darth Vader contrata devs</h1>
            <p>Darth vader procura devs que sabem trabalhar com componentes</p>
        </div>
        <div class="card_right">
            <img src="caminho_imagem" alt=""/>
        </div>
    </div>
```
***DOM***
Document Object Model( Faz um parse do codigo e transforma em uma estrutura de "arvore" num esquema de parent/child(tipo arvore binaria mesmo))

***SHADOW DOM/CUSTOM COMPONENT***
E como se pudessemos criar dentro do DOM(arvore) uma sub arvore onde temos total controle e trabalhada de forma encapsulada.
