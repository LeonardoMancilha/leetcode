class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const mergeTwoLists = function (list1, list2) {
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

// Função auxiliar para converter um array em uma lista encadeada
const arrayToLinkedList = (arr) => {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
};

// Função auxiliar para converter uma lista encadeada em um array
const linkedListToArray = (head) => {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
};

module.exports = { mergeTwoLists, arrayToLinkedList, linkedListToArray, ListNode };
