Em python variaveis nao precisam ser decladaradas com tipos, e tambem nao existe palavra reservada como "final" no Java para definir constantes e usado por convencao o uso de todas as letras em uppercase em caso de constantes

E utilizado o sneak_case invez de CamelCase

**para fazer parse de tipos:**

preco = 10
preco = float(preco) //assim e feito o parse

**concatenacao**

text = f"idade {idade} preco {preco}"
print(text)

**funcao de entrada**

nome = input("informe seu nome") // converte para string e passa o valor

**operadores logicos**

and
or
not

**operadores de identidade**

is
is not

**operadores de associacao**

in
not in

**identacao e blocos**

nao utiliza caracteres para delimitar um bloco e utilizado identacao 
Por convencao se usa 4 espacos e mbranco por nivel de identacao

    def sacar(self, valor:float) -> None:
        if self.saldo >= valor:
            self.saldo -= valor

**estruturas condicionais**

if/if-else/elif

    if saldo >= saque:
        print("ta rolando")
    elif opcao 2 -- 2:
        print("pipipopopo")
    else:
        sys.exit("opcao invalida)

nested if

    if conta_normal:
        if saldo >= saque:
            print
        elif saque <= (saldo+cheque_especial):
            print
    elif conta_universitaria:
        if saldo >= saque:
            print
        else:
            print

if ternario

status = "sucesso" if saldop >= saque else "Falha"

**estruturas de repeticao**

for

    texto = input("informe o texto")
    VOGAIS = "AEIOU"

    for letra in texto:
        if letra.upper() in VOGAIS:
            print(letra, end="")
    print() #quebra de lina

for com range

    for numero in range(1,10):
        print(numero, end=" ")

while

    while opcao != 0:
        opcao = int(input("1 sacar \n 2 extrato \n0 sair\n:))
        if opcao == 1:
            print
        elif opcao == 2:
            print

Continue e Break

break interrompe o laco

continue usa uma condicional e "pula" aquele laco ex 

for numero in range(100):
    if numero ==12:
        continue    #ele vai pular o 12 e continuar