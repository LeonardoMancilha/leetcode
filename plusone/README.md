# Plus One Challenge - LeetCode

## Descrição

Este repositório contém a solução para o desafio **Plus One** do LeetCode, onde o objetivo é simular a operação de adição de 1 a um número representado como um array de dígitos. Por exemplo, dado o número `123`, representado como o array `[1, 2, 3]`, o resultado esperado da operação `plusOne([1, 2, 3])` deve ser `[1, 2, 4]`.

O desafio consiste em adicionar 1 ao número de forma eficiente e considerar casos de "overflow", onde é necessário propagar o carry (retenção de valor) para os dígitos mais à esquerda.

## Descrição do Código

A função `plusOne` recebe um array de dígitos e realiza a adição de 1 de forma iterativa, considerando os seguintes pontos:

- **Overflow**: Quando um dígito atinge 9, ele é resetado para 0 e o carry é propagado para o próximo dígito à esquerda.
- **Tamanho do array**: Quando todos os dígitos são 9, o array é expandido com a adição de um 1 na posição mais à esquerda.
- **Validação de entrada**: O código garante que o array de entrada não está vazio e que contém apenas números.

### Função `plusOne`

```javascript
const plusOne = function (digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      let temp = digits[i] + carry;
      digits[i] = temp % 10;
      carry = Math.floor(temp / 10);
      break;
    }

    i !== 0 ? (digits[i] = 0) : (digits[i] += 1);
  }

  digits[0] > 9 ? valueDigits(digits) : null;

  function valueDigits(digits) {
    digits[0] = 0;
    digits.unshift(1);
  }

  if (digits.length === 0) {
    throw new Error('Input array cannot be empty');
  } 

  if (digits.some(element => typeof element !== 'number')) {
    throw new Error('Invalid input: array must contain only digits');
  }

  return digits;
};

module.exports = plusOne;
```

# Testes
Os testes são escritos usando o Jest e cobrem uma variedade de cenários para garantir que a função plusOne funcione corretamente em diferentes casos.

## Casos de Teste

### Adicionar 1 a um número:
```javascript
expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
```

### Aumentar o tamanho do array quando todos os dígitos são 9:
```javascript
expect(plusOne([9, 9])).toEqual([1, 0, 0]);
```

### Adicionar 1 a um número de um único dígito:
```javascript
expect(plusOne([8])).toEqual([9]);
expect(plusOne([9])).toEqual([1, 0]);
```

### Ignorar zeros à esquerda:
```javascript
expect(plusOne([0, 1, 2])).toEqual([0, 1, 3]);
```

### Lidar com múltiplos 9s e carry-over:
```javascript
expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
```

### Lançar erro se o array de entrada estiver vazio:
```javascript
expect(() => plusOne([])).toThrow("Input array cannot be empty");
```

### Lançar erro se o array de entrada contiver valores não numéricos:
```javascript
expect(() => plusOne([1, "a", 3])).toThrow("Invalid input: array must contain only digits");
```

### Não lançar erro para um array numérico válido:
```javascript
expect(() => plusOne([1, 2, 3])).not.toThrow();
```

### Contribuição

Sinta-se à vontade para abrir issues e pull requests. Contribuições são sempre bem-vindas!