const singleNumber = require('./singleNumber');

test('should show the only number which does not repeat', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
    expect(singleNumber([1])).toBe(1);
});

test('should show the only number which does not repeat between negative numbers', () => {
    expect(singleNumber([-1, -1, 2])).toBe(2);
    expect(singleNumber([-4, -1, -2, -1, -2])).toBe(-4);
});

test('should show the only number which does not repeat between big numbers', () => {
    expect(singleNumber([999999999, 1, 1])).toBe(999999999);
    expect(singleNumber([2 ** 31 - 1, 2 ** 31 - 1, 3])).toBe(3);
});

test('should show the only number which does not repeat when the array is empty', () => {
    expect(singleNumber([])).toBe(0);
});

test('should show the only number which does not repeat when the array contains only one element', () => {
    expect(singleNumber([1])).toBe(1);
});

test('should show the only number which does not repeat when there are many numbers', () => {
    expect(singleNumber([1, 1, 2, 2, 3, 4, 4, 5, 5])).toBe(3);
});

test('should show the only number which does not repeat when there are many negative numbers', () => {
    expect(singleNumber([-1, -1, 2, 2, 3, 4, 4, 5, 5])).toBe(3);
});

test('should show the only number which does not repeat when there is only one number', () => {
    expect(singleNumber([42])).toBe(42);
    expect(singleNumber([-100])).toBe(-100);
});

test('should show the only number which does not repeat when there are only numbers zero', () => {
    expect(singleNumber([0, 1, 1])).toBe(0);
    expect(singleNumber([0, 0, -1])).toBe(-1);
});

test('should show the only number which does not repeat when there are only numbers zero and one other number', () => {
    expect(singleNumber([0, 1])).toBe(1);
    expect(singleNumber([0, 0])).toBe(0);
});

test('should show the only number which does not repeat when there are many random inputs', () => {
    expect(singleNumber([2, 1, 2, 3, 1])).toBe(3);
    expect(singleNumber([1, 2, 2, 3, 1])).toBe(3);
});
