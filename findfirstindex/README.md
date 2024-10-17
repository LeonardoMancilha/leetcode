# 📝 First Index in String - Testes Unitários com Jest

Este projeto resolve o desafio de encontrar o índice da primeira ocorrência de uma string (`needle`) dentro de outra string (`haystack`). Além disso, inclui uma suite de testes unitários para garantir que a função funcione corretamente em diferentes cenários.

## 📋 Descrição

A função `FirstIndexInString` recebe duas strings como parâmetros:
- **needle**: A string a ser buscada.
- **haystack**: A string onde a busca será feita.

Ela retorna o índice da primeira ocorrência de `needle` em `haystack`. Caso `needle` não seja encontrada, a função retorna `-1`.

## 🚀 Funcionalidades

- Retorna o índice da primeira ocorrência de `needle` em `haystack`.
- Lida corretamente com caracteres especiais, multibyte e unicode.
- Trata casos de strings vazias e substrings repetidas.

## 🧪 Testes Unitários

Os testes foram desenvolvidos usando **Jest** para garantir o comportamento correto da função em diferentes situações.

### Casos Testados

1. **Casos Básicos**:
   - Verifica se a função retorna o índice correto quando `needle` está presente em `haystack`.

2. **Casos de Ausência**:
   - Verifica se a função retorna `-1` quando `needle` não está presente em `haystack`.

3. **Casos de Strings Vazias**:
   - Verifica o comportamento quando `needle` é uma string vazia (deve retornar `0`).
   - Verifica o comportamento quando `haystack` é uma string vazia (deve retornar `-1`).

4. **Casos de Substring no Início, Meio e Fim**:
   - Testa quando `needle` está no início, no meio ou no final de `haystack`.

5. **Casos de Repetição**:
   - Verifica se a função retorna o índice da primeira ocorrência quando `needle` aparece várias vezes em `haystack`.

6. **Casos de Caracteres Especiais**:
   - Testa se a função funciona corretamente com caracteres especiais, como `!`, `@`, etc.

7. **Casos de Caracteres Multibyte e Unicode**:
   - Verifica o comportamento da função com caracteres multibyte (`äöü`) e unicode (como emojis, por exemplo).

### 🛠 Como Executar os Testes

1. Certifique-se de que o **Jest** está instalado. Caso não esteja, instale-o com o comando:

    ```bash
    npm install jest --save-dev
    ```

2. Para executar os testes, use o comando:

    ```bash
    npm test
    ```

### Exemplo de Teste

```javascript
test('verify if the function works with special characters in the haystack', () => {
    expect(FirstIndexInString('abc!def', '!')).toBe(3);
    expect(FirstIndexInString('abc!def', 'def')).toBe(4);
});
```

# 📦 Instalação

Para rodar este projeto localmente, siga os seguintes passos:

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Instale as dependências:
   ```bash
    npm install
    ```

3. Rode os testes:
   ```bash
    npm test
    ```

# 🛠 Tecnologias Utilizadas

- JavaScript
- Jest para testes unitários
