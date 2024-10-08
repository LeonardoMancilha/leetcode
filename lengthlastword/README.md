# Desafio: Comprimento da Última Palavra

## Descrição
Este desafio consiste em uma função JavaScript que calcula o comprimento da última palavra em uma string fornecida. A função foi desenvolvida como um desafio no LeetCode, e o objetivo é lidar com diferentes casos de entrada, como strings vazias, strings com espaços e frases com múltiplas palavras.

## Funcionalidade
A função `lengthOfLastWord` implementa a seguinte lógica:
- Remove espaços em branco no início e no final da string.
- Divide a string em palavras.
- Retorna o comprimento da última palavra encontrada.

## Testes
Foram implementados testes unitários utilizando o Jest para garantir que a função opere corretamente em diversos cenários. Os testes incluem:
1. **String vazia:** Verifica se a função retorna 0 quando a string está vazia.
2. **String com espaços apenas:** Testa se a função ignora corretamente os espaços e retorna 0.
3. **String com uma única palavra:** Verifica se a função retorna o comprimento correto de uma palavra sem espaços.
4. **String com múltiplas palavras:** Testa se a função retorna o comprimento da última palavra de uma frase com várias palavras.
5. **Espaços no início ou fim da string:** Verifica se a função remove os espaços extras e ainda retorna o comprimento correto da última palavra.
6. **Palavras com diferentes comprimentos:** Testa se a função lida corretamente com palavras de vários tamanhos.

## Instalação
Para utilizar este projeto, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone <https://github.com/LeonardoMancilha/leetcode/tree/main/lengthlastword>

2. Navegue até a pasta do projeto:
   cd `<lengthlastword>`

3. Instale as dependências:
   npm install

## Execução dos Testes
Para executar os testes, utilize o seguinte comando:
    npm test

## Contribuição
Sinta-se à vontade para contribuir com melhorias ou correções. Crie uma nova branch para suas alterações e envie um pull request.

## Licença
Este projeto é de código aberto e pode ser utilizado conforme a licença MIT.
