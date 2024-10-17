const FirstIndexInString = require('./FirstOccurrenceIndex');

test('verify if the function returns the right index', () => {
    expect(FirstIndexInString('sad', 's')).toBe(0);
    expect(FirstIndexInString('sad', 'a')).toBe(1);
    expect(FirstIndexInString('sad', 'd')).toBe(2);
});

test('verify if the function returns -1 when the needle is not found in the haystack', () => {
    expect(FirstIndexInString('sad', 'z')).toBe(-1);
    expect(FirstIndexInString('', 'a')).toBe(-1);
    expect(FirstIndexInString('leetcode', 'leeto')).toBe(-1);
});

test('verify if some string is empty', () => {
    expect(FirstIndexInString('sad', '')).toBe(0);
    expect(FirstIndexInString('', 'lion')).toBe(-1);
});

test('verify if the function works with case-sensitive needle', () => {
    expect(FirstIndexInString('leetcode', 'LEET')).toBe(-1);
    expect(FirstIndexInString('leetcode', 'leet')).toBe(0);
});

test('verify if the needle is a substring of the haystack', () => {
    expect(FirstIndexInString('leetcode', 'leet')).toBe(0);
    expect(FirstIndexInString('leetcodeleetcodeleetcodeleetcodeleetcode', 'leet')).toBe(0);
    expect(FirstIndexInString('leetcodeleetcodeleetcodeleetcodeleetcode', 'code')).toBe(4); 
    expect(FirstIndexInString('abcdefgh', 'ef')).toBe(4); 
    expect(FirstIndexInString('leeshungerleet', 'leet')).toBe(10);
    expect(FirstIndexInString('abcdabcdabcd', 'cd')).toBe(2);
    expect(FirstIndexInString('findtheend', 'end')).toBe(7); 
});

test('verify if the values are empty', () => {
    expect(FirstIndexInString('', '')).toBe(0);
    expect(FirstIndexInString(' ', ' ')).toBe(0);
});

test('verify if the variables have big values', () => {
    expect(FirstIndexInString('a'.repeat(100000) + 'needle', 'needle')).toBe(100000);
    expect(FirstIndexInString('a'.repeat(50000) + 'needle' + 'b'.repeat(50000), 'needle')).toBe(50000);
    expect(FirstIndexInString('a'.repeat(100000), 'b'.repeat(1000))).toBe(-1);
    expect(FirstIndexInString('a'.repeat(100000) + 'z', 'z')).toBe(100000);
    expect(FirstIndexInString('abc'.repeat(100000), 'abcabc')).toBe(0);
});

test('verify if the values repeat', () => {
    expect(FirstIndexInString('leetleetleetleet', 'leet')).toBe(0);
    expect(FirstIndexInString('sakaleetchallengeleet', 'leet')).toBe(4);
});

test('verify if the function works with numbers in the haystack', () => {
    expect(FirstIndexInString('abc123def', '123')).toBe(3);
    expect(FirstIndexInString('abc123def', 'abc')).toBe(0);
});

test('verify if the function returns 0 when the values are equal', () => {
    expect(FirstIndexInString('leet', 'leet')).toBe(0);
    expect(FirstIndexInString('challenge', 'challenge')).toBe(0);
});

test('verify if the function works with special characters in the haystack', () => {
    expect(FirstIndexInString('abc!def', '!')).toBe(3);
    expect(FirstIndexInString('abc!def', 'def')).toBe(4);
});

test('verify if the function works with multibyte characters in the haystack', () => {
    expect(FirstIndexInString('abcäöüdef', 'äöü')).toBe(3);
    expect(FirstIndexInString('abcäöüdef', 'abc')).toBe(0);
});

test('verify if the function works with unicode characters in the haystack', () => {
    expect(FirstIndexInString('abc����def', '����')).toBe(3);
    expect(FirstIndexInString('abc����def', 'abc')).toBe(0);
});

test('verify if the function works with non-ASCII characters in the haystack', () => {
    expect(FirstIndexInString('abc��字def', '��字')).toBe(3);
    expect(FirstIndexInString('abc��字def', 'abc')).toBe(0);
});
