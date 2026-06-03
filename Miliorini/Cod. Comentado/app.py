# ==============================================================================
# PROGRAMA COMPLETO: CÁLCULO DO IMC (COMENTADO LINHA POR LINHA)
# ==============================================================================

# 1. ENTRADA DE DADOS
# input(): Mostra a mensagem na tela e espera o usuário digitar o peso. O texto digitado entra como String.
# float(): Pega esse texto e o transforma em um número decimal (ex: "70.5" vira 70.5) para podermos fazer contas.
# peso =: Cria a variável 'peso' e guarda esse número decimal lá dentro.
peso = float(input("Digite o seu peso em kg (ex: 70.5): "))

# Faz exatamente o mesmo processo da linha anterior: lê o texto, converte para decimal e guarda na variável 'altura'.
altura = float(input("Digite a sua altura em metros (ex: 1.75): "))


# 2. CÁLCULO DO IMC
# (altura ** 2): Eleva a altura ao quadrado (altura vezes altura) primeiro, por causa dos parênteses.
# peso / ...: Divide o valor guardado em 'peso' pelo resultado da altura ao quadrado.
# imc =: Salva o resultado final dessa operação matemática dentro da variável 'imc'.
imc = peso / (altura ** 2)


# 3. EXIBIÇÃO DO RESULTADO
# print(): Função que exibe informações no console/terminal para o usuário.
# f"...": Ativa as f-strings, permitindo colocar variáveis direto no texto usando chaves {}.
# \n: É um caractere especial invisível que pula uma linha para o texto não ficar colado.
# {imc:.2f}: Pega o número do IMC e diz ao Python para mostrar apenas 2 casas decimais (float).
print(f"\nSeu IMC é: {imc:.2f}")


# 4. ESTRUTURA DE DECISÃO (CLASSIFICAÇÃO DA OMS)
# Se (if) o valor da variável 'imc' for menor que 18.5, o Python entra aqui. O ':' inicia o bloco.
if imc < 18.5:
    # Mostra a mensagem na tela se (e somente se) a condição do 'if' acima for verdadeira.
    print("Classificação: Abaixo do peso")

# Senão, se (elif) o IMC for maior ou igual a 18.5 E menor que 25, o programa entra aqui.
elif 18.5 <= imc < 25:
    # Mostra esta mensagem caso o IMC esteja nesta faixa ideal de peso.
    print("Classificação: Peso normal (ideal)")

# Senão, se (elif) o IMC for maior ou igual a 25 E menor que 30, o programa avalia esta linha.
elif 25 <= imc < 30:
    # Exibe que o usuário está na faixa de sobrepeso.
    print("Classificação: Sobrepeso")

# Senão, se (elif) o IMC estiver entre 30 (inclusive) e menos que 35.
elif 30 <= imc < 35:
    # Exibe a mensagem de Obesidade Grau I.
    print("Classificação: Obesidade Grau I")

# Senão, se (elif) o IMC estiver entre 35 (inclusive) e menos que 40.
elif 35 <= imc < 40:
    # Exibe a mensagem de Obesidade Grau II.
    print("Classificação: Obesidade Grau II")

# Senão (else): É a última saída. Se NENHUMA das condições anteriores for verdadeira (IMC de 40 para cima).
else:
    # Executa esta linha obrigatoriamente caso o IMC seja igual ou maior que 40.
    print("Classificação: Obesidade Grau III (Mórbida)")