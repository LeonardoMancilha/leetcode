# 🧩 Single Number - Desafio LeetCode

## 📜 Descrição do Problema
Dado um array de inteiros nums, onde todos os números aparecem exatamente duas vezes, exceto por um único número, encontre e retorne esse número único.

Exemplo 1
- Entrada: [4, 1, 2, 1, 2]
- Saída: 4

Exemplo 2
- Entrada: [2, 2, 1]
- Saída: 1

Exemplo 3
- Entrada: [1]
- Saída: 1

## 🛠️ Solução
A solução utiliza o operador XOR (^), que possui propriedades úteis para este problema:

#### 1. Operador XOR (^): 
O XOR compara os bits de dois números: 

- Se os bits forem iguais, o resultado é 0.
- Se forem diferentes, o resultado é 1. 
  
Exemplo: 
- 5 ^ 5 = 0 
- 5 ^ 3 = 6

#### Propriedades importantes usadas aqui:

- n ^ n = 0 (um número XORado com ele mesmo dá 0).
- n ^ 0 = n (um número XORado com 0 continua sendo ele mesmo).
  
#### 2. Como o XOR resolve o problema? 
Quando aplicamos XOR em todos os números do array:

- Os números que aparecem duas vezes se anulam.
- O número único permanece.
  
#### 3. Função reduce: 

A função <i>reduce</i> aplica o XOR a cada elemento do array, acumulando o resultado em acc.
- Começa com o valor inicial 0, que não altera o cálculo (propriedade do XOR).
  
### Exemplo passo a passo para [4, 1, 2, 1, 2]:

- acc = 0 ^ 4 = 4
- acc = 4 ^ 1 = 5
- acc = 5 ^ 2 = 7
- acc = 7 ^ 1 = 6
- acc = 6 ^ 2 = 4
  
Resultado final: <strong>4</strong>.

## Complexidade
- Tempo: O(n) - Itera por todos os elementos do array uma vez.
- Espaço: O(1) - Não utiliza espaço extra proporcional ao tamanho do array.
  
Essas propriedades permitem que eliminemos números duplicados do array, deixando apenas o número único.

## 🧪 Testes
Implementei os testes abaixo utilizando Jest para garantir que a solução cobre diferentes cenários:

Casos testados:

- Números repetidos com um número único: <br>
Exemplo: [2, 2, 1] → 1
- Números negativos: <br>
Exemplo: [-1, -1, 2] → 2
- Números grandes: <br>
Exemplo: [999999999, 1, 1] → 999999999
- Array vazio: <br>
Exemplo: [] → 0
- Array com apenas um elemento: <br>
Exemplo: [42] → 42
- Zeros e outros números: <br>
Exemplo: [0, 1, 1] → 0

## 🚀 Aprendizados

- Como usar o operador XOR para resolver problemas de números únicos.
- A importância de escrever testes abrangentes para cobrir diferentes casos de borda.
- Como validar cenários como arrays vazios, números negativos e valores grandes.
