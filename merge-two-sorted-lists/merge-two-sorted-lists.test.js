const {
  mergeTwoLists,
  arrayToLinkedList,
  linkedListToArray,
} = require("./merge-two-sorted-lists");

test('Mesclar [1, 2, 4] e [1, 3, 4] deve resultar em [1, 1, 2, 3, 4, 4]', () => {
    const list1 = arrayToLinkedList([1, 2, 4]);
    const list2 = arrayToLinkedList([1, 3, 4]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(linkedListToArray(mergedList)).toEqual([1, 1, 2, 3, 4, 4]);
});

test('Mesclar [1, 2, 4] e [3, 5, 6] deve resultar em [1, 2, 3, 4, 5, 6]', () => {
    const list1 = arrayToLinkedList([1, 2, 4]);
    const list2 = arrayToLinkedList([3, 5, 6]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(linkedListToArray(mergedList)).toEqual([1, 2, 3, 4, 5, 6]);
});

test('Mesclar duas listas vazias deve resultar em []', () => {
    const list1 = arrayToLinkedList([]);
    const list2 = arrayToLinkedList([]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(linkedListToArray(mergedList)).toEqual([]);
});

test('Mesclar uma lista vazia com [0] deve resultar em [0]', () => {
    const list1 = arrayToLinkedList([]);
    const list2 = arrayToLinkedList([0]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(linkedListToArray(mergedList)).toEqual([0]);
});
