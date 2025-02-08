# Desafio de Programação: Encontrar o Elemento Majoritário

Este repositório contém a solução para o desafio de programação "Elemento Majoritário" do LeetCode, com uma implementação em JavaScript. Além disso, a solução vem acompanhada de testes unitários implementados com Jest para garantir a precisão da função.

## Descrição do Desafio

### Objetivo:
Dado um array de números, o objetivo é encontrar o "elemento majoritário". Esse elemento é o que aparece mais de metade das vezes no array. Caso não exista um tal elemento, a função deve retornar -1.

### Algoritmo Utilizado:
A solução utiliza o Algoritmo de Boyer-Moore para encontrar o elemento majoritário em tempo O(n) e espaço O(1).

## Funcionalidade
A função majorityElement recebe um array de números e retorna o elemento majoritário, caso exista. Caso contrário, retorna -1.

Exemplo:
```js
const nums = [3, 2, 3];

const result = majorityElement(nums);
console.log(result); // 3
```

Outro Exemplo:
```js
const nums = [1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4];

const result = majorityElement(nums);
console.log(result); // -1 (não há majoritário)
```

## Testes
Para garantir que a solução funcione corretamente, foram implementados testes utilizando o framework Jest. Eles verificam diferentes cenários, incluindo arrays vazios, arrays com um único elemento e arrays com múltiplos elementos iguais.

### Casos Testados:
- Arrays vazios
- Arrays com um único número
- Arrays com múltiplos elementos iguais
- Arrays com valores negativos e flutuantes
- Arrays com elementos não sequenciais

## Tecnologias Utilizadas
- JavaScript: Linguagem utilizada para implementar a solução.
- Jest: Framework para testes unitários.

