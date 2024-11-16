# Desafio de Prefixo Comum Mais Longo

Esta pasta contém uma solução em JavaScript e testes para encontrar o **prefixo comum mais longo** em um array de strings.

## Descrição do Problema

Dado um array de strings, retorne o **prefixo comum mais longo** compartilhado entre todas as strings. Caso não exista um prefixo comum, retorne uma string vazia.

### Exemplos

```javascript
Entrada: ["flor", "fluxo", "flauta"]
Saída: "fl"

Entrada: ["cachorro", "gato", "rato"]
Saída: ""
```

## Restrições

A função longestCommonPrefix reduz iterativamente um prefixo comparando-o com cada string no array. Caso nenhum prefixo seja encontrado, ela retorna uma string vazia.

## Passos do Algoritmo
- Comece com a primeira string do array como o prefixo inicial.
- Compare o prefixo atual com cada string subsequente.
- Encurte o prefixo até que ele corresponda ao início da string atual.
- Se o prefixo ficar vazio, pare e retorne "".

## Testes
O projeto inclui um conjunto abrangente de casos de teste implementados usando Jest para garantir a correção da solução.

Casos de Teste Cobertos:

- Array com um prefixo comum (["flor", "fluxo", "flauta"] → "fl").
- Array sem prefixo comum (["cachorro", "gato", "rato"] → "").
- Uma única string no array (["a"] → "a").
- Strings idênticas (["maçã", "maçã", "maçã"] → "maçã").
- Strings com prefixos parciais (["app", "aplicativo", "aparelho"] → "ap").
- Strings contendo valores vazios (["", ""] → "").
