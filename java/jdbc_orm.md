***JDBC***
    Java Database Connectivity
**********

É um conjunto de classes e interfaces(API) escritas em Java que fazem o envio de instrucoes SQL para qualquer banco de dados relacional

        DriveMaganeger(classe)
        Connection(interface)
        PreparedStatement(interface/Protege contra sql injections)
        ResultSet(interface)

***ORM***
    Object relational model
***********

E uma tecnica de mapeamento objeto relaciononal que permite fazer uma relacao dos objetos com os dados que os mesmos representam

***JPA***
    Java Persistencce API
*********
E uma API padrao do java que descreve uma interface comum para frameworks de persistencia de dados. A JPA define um meio de mapeamento objeto-relacional para objetos java simples e comuns.

**JPA e Hibernate Sao a mesma coisa ?**

Hibernate e uma tecnologia, ela foi a primeira de ORM para Java. Com a popularizacao da mesma, a Oracle(mantedora do java na epoca) acabou por convidar os criadores do Hibernate para construirem o JPA que e uma ESPECIFICACAO, indicando como deve ser implementado qualquer framework ORM para padronizar a forma como o dev final trabalha com eles. Alem do Hibernate um outro framework de JPA e o EclipseLink
*********

**Aplication code -> JPA Layer -> JDBC(sql) Layer ------> Relational DB**

***Como Mapear uma tabela com Hibernate***
**********
Primeiro passo e declarar uma Entidade @Entity (Essa classe e a representacao de uma tabela no banco de dados) depois a anotacao @Table(name="nome_tabela") caso essa tabela nao existir ela e criada  

Existe tambem a anotacao @Id(define que essa coluna e o PK da tabela)
a anotacao @Column(name="nome_coluna")
e a anotacao @GeneretedValue(strategy= GenerationType.opcoes)

**Mas por que usar o HIBERNATE?**

  - Faz o mapeamento das tabelas do bd com classes
  - Possui um pacote de classes uteis que facilitam o processo de interacao com o BD, muitas das vezes na oe necessario uitilizar queries
  - No caso, de uma possivel migracao de BD nao sera necessario alterar o codigo.