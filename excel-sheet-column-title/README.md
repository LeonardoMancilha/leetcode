# Desafio de Lógica de Programação: Converter Números em Títulos de Colunas (Estilo Excel)

## Descrição
Este projeto resolve um problema clássico de conversão de números em títulos de colunas, como no Excel. A ideia é converter um número inteiro positivo em um título correspondente, usando as letras do alfabeto (A-Z). Por exemplo:

- 1 → A
- 28 → AB
- 701 → ZY

A função convertToTitle recebe um número inteiro positivo e retorna o título da coluna correspondente.

## Funcionalidade

### Função convertToTitle(columnNumber)
- Entrada: Um número inteiro positivo columnNumber.
- Saída: Um título de coluna em formato de string (por exemplo, 'A', 'AB', 'ZY').

### Validação de Entrada
A função valida a entrada para garantir que o valor seja um número inteiro positivo. Caso contrário, um erro será lançado.

Exemplo de erro: "Invalid input. Input must be a positive integer."

## Exemplos de Uso

```
console.log(convertToTitle(1)); // Saída: "A"
console.log(convertToTitle(28)); // Saída: "AB"
console.log(convertToTitle(701)); // Saída: "ZY"
```

## Testes
A solução inclui testes automatizados utilizando o framework Jest para garantir o comportamento correto da função. Os testes verificam:

1. A conversão correta de números em títulos de colunas.
2. A validação de entrada, assegurando que apenas números inteiros positivos sejam aceitos.

### Testes

```
test("should return correct column number", () => {
  expect(convertToTitle(1)).toBe("A");
  expect(convertToTitle(28)).toBe("AB");
  expect(convertToTitle(701)).toBe("ZY");
  expect(convertToTitle(26)).toBe("Z");
  expect(convertToTitle(52)).toBe("AZ");
  expect(convertToTitle(18278)).toBe("ZZZ");
});


test("should throw error for invalid input", () => {
  expect(() => convertToTitle(0)).toThrow(
    "Invalid input. Input must be a positive integer."
  );
  expect(() => convertToTitle(-1)).toThrow(
    "Invalid input. Input must be a positive integer."
  );
  expect(() => convertToTitle(1.5)).toThrow(
    "Invalid input. Input must be a positive integer."
  );
  expect(() => convertToTitle("string")).toThrow(
    "Invalid input. Input must be a positive integer."
  );
  expect(() => convertToTitle(null)).toThrow(
    "Invalid input. Input must be a positive integer."
  );
  expect(() => convertToTitle(undefined)).toThrow(
    "Invalid input. Input must be a positive integer."
  );
  expect(() => convertToTitle(NaN)).toThrow(
    "Invalid input. Input must be a positive integer."
  );
});
```
## Tecnologias Utilizadas

- JavaScript: A principal linguagem utilizada para desenvolver a solução.
- Jest: Framework de testes utilizado para garantir a integridade da função.
