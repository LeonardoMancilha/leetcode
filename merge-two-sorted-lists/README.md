# Merge Two Sorted Lists

Este repositório contém uma solução para o desafio de mesclar duas listas encadeadas ordenadas, proveniente da plataforma [LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/description/). O objetivo é combinar duas listas encadeadas em uma única lista ordenada.

## Descrição do Problema

Dadas duas listas encadeadas ordenadas, a tarefa é **mesclá-las** em uma única lista encadeada ordenada.

### Entrada:
- **list1**: A primeira lista encadeada ordenada.
- **list2**: A segunda lista encadeada ordenada.

### Saída:
- A função deve retornar uma lista encadeada ordenada que combine as duas listas de entrada.

#### Exemplo:

```plaintext
Entrada:

list1 = 1 -> 2 -> 4
list2 = 1 -> 3 -> 4

Saída:
1 -> 1 -> 2 -> 3 -> 4 -> 4
```

# Solução

A solução utiliza um algoritmo iterativo que compara os elementos das duas listas e os mescla de forma ordenada. O processo é simples e consiste em iterar pelas duas listas, comparando os valores de cada nó e adicionando o menor valor na lista resultante até que uma das listas se esgote. Após isso, a lista restante da outra lista é anexada diretamente.

# Implementação

```js
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1); // Nó fictício para simplificar a lógica
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Se restar elementos em alguma das listas, anexamos diretamente
    current.next = list1 !== null ? list1 : list2;

    return dummy.next; // Retorna a cabeça da lista mesclada
};
```

# Testes

Para garantir que a função funcione corretamente, implementei testes usando o framework Jest. Os testes validam os diferentes casos de entrada, incluindo:

- Mesclar duas listas não vazias.
- Mesclar duas listas vazias.
- Mesclar uma lista vazia com uma lista não vazia.

## Como rodar os testes

1. Clone este repositório
```bash
git clone https://github.com/seu-usuario/merge-two-sorted-lists.git
```

2. Instale as dependências do projeto:
```bash
npm install
```

3. Execute os testes:
```bash
npm test
```

### Casos de Teste
Os testes verificam os seguintes cenários:

- Mesclagem de listas simples:
  
  - list1 = 1 -> 2 -> 4 e list2 = 1 -> 3 -> 4
  - Esperado: 1 -> 1 -> 2 -> 3 -> 4 -> 4

- Uma das listas é vazia:

  - list1 = null e list2 = 1 -> 2 -> 3
  - Esperado: 1 -> 2 -> 3

- Listas com números iguais:

  - list1 = 1 -> 2 -> 3 e list2 = 1 -> 2 -> 3
  - Esperado: 1 -> 1 -> 2 -> 2 -> 3 -> 3

# Conclusão

Este desafio foi uma ótima oportunidade para aprimorar minhas habilidades com listas encadeadas, recursão e algoritmos de mesclagem. Além disso, implementar testes com Jest me ajudou a garantir que a solução fosse robusta e funcionasse corretamente em diferentes cenários.
