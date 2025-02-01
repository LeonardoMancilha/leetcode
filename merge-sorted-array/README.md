# Merge Sorted Arrays Challenge
## Descrição
Este repositório contém a solução para o desafio de mesclar dois arrays ordenados. O objetivo é criar uma função que recebe dois arrays de números ordenados e os mescla de maneira eficiente, mantendo a ordenação do resultado final. A função deve modificar o primeiro array (nums1) para incluir os elementos do segundo array (nums2), sem precisar de um array extra.

## Objetivo
Dado dois arrays ordenados nums1 e nums2, com os parâmetros m e n representando o número de elementos válidos em cada um, a função deve:

- Mesclar os dois arrays em ordem crescente.
- Modificar o array nums1 para incluir os elementos de nums2, utilizando os espaços já alocados no final de nums1.
- Não utilizar estruturas de dados extras como novos arrays ou listas.

### Exemplo

```js
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

merge(nums1, 3, nums2, 3);
// Saída esperada: [1, 2, 2, 3, 5, 6]
```

## Casos de Teste
O código inclui os seguintes testes:

- Mesclagem de arrays não vazios: Verifica se a função mescla dois arrays de forma ordenada.
- Array nums2 vazio: Verifica se a função não altera nums1 quando nums2 é vazio.
- Array nums1 vazio: Verifica se a função apenas insere os elementos de nums2 em nums1.
- Arrays com valores nulos ou inválidos: Verifica se erros são lançados quando os parâmetros não são válidos.
