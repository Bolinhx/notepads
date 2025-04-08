curso = "pYthOn"

print(curso.upper()) #tudo uppercase
print(curso.lower()) #tudo lowercase
print(curso.title()) #somente a 1 maiuscula (capitular)

curso = "       pYthOn "

print(cusrso.strip()) #retira os espacos em branco
print(cusrso.lstrip()) #retira os epsacos do inicio
print(cusrso.rstrip()) #retira os espacos do final

curso = "Python"

print(curso.center(10, "#"))
>> "##Python##"

print(".".join(curso))
>> "P.y.t.h.o.n"

**Interpolacao de variaveis**

usando o metodo .format

print("oi meu nome{},tenho {}anos".format(nome,idade))

print(f"oi meu nome e {nome}, tenho {anos} anos)

print(f"Valore de PI: {PI:2f})

**Fatiamento de string**

nome = "bernardo bolinhx da silva"

nome[:: -1]
    retorna de tras pra frente

**multiple line string**

usa 3 aspas simples e mantem a formatacao

mensagem = f'''
Ola meu nome e {nome}
 estou aprendendo Python'''