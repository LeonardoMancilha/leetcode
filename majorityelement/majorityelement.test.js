const majorityElement = require('./majorityelement');

test('it should be able to create majority elements', () => {
    const input = [3, 2, 3];
    const expected = 3;
    const result = majorityElement(input);
    expect(result).toBe(expected);
});

test('it should return -1 when there is no majority element', () => {
    const input = [2, 2, 1, 1, 1, 2, 2];
    const expected = 2;
    const result = majorityElement(input);
    expect(result).toBe(expected);
});

test('it should handle empty arrays', () => {
    const input = [];
    const expected = -1; 
    const result = majorityElement(input);
    expect(result).toBe(expected);
});

test('it should handle arrays with one element', () => {
    const input = [1];
    const expected = 1;
    const result = majorityElement(input);
    expect(result).toBe(expected);
});

test('it should handle arrays with two different elements', () => {
    const input = [1, 2];
    const expected = -1; 
    const result = majorityElement(input);
    expect(result).toBe(expected);
});

test('it should handle arrays with two equal elements', () => {
    const input = [1, 1];
    const expected = 1;
    const result = majorityElement(input);
    expect(result).toBe(expected);
});

test('it should handle arrays with multiple majority elements', () => {
    const input = [1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4];
    const expected = -1;
    const result = majorityElement(input);
    expect(result).toBe(expected);
});

test('it should handle arrays with negative numbers', () => {
    const input = [-1, -2, -3, -3, -3, -3, -3, -4, -4, -4, -4, -4, -4];
    const expected = -1;
    const result = majorityElement(input);
    expect(result).toBe(expected);
});

test('it should handle arrays with floating-point numbers', () => {
    const input = [1.5, 2.5, 3.5, 3.5, 3.5, 3.5, 3.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5];
    const expected = -1;
    const result = majorityElement(input);
    expect(result).toBe(expected);
});

test('it should handle arrays with duplicate elements in a non-sequential order', () => {
    const input = [3, 2, 3, 1, 3, 2, 3];
    const expected = 3;
    const result = majorityElement(input);
    expect(result).toBe(expected);
});

test('it should handle arrays with duplicate elements in a sequential order', () => {
    const input = [1, 1, 1, 2, 2, 2, 3, 3, 3];
    const expected = -1;
    const result = majorityElement(input);
    expect(result).toBe(expected);
});

