const findCommonPrefix = require('./longestcommonprefix');

test('Should return "fl" as the common prefix for ["flower", "flow", "flight"]', () => {
    expect(findCommonPrefix(["flower", "flow", "flight"])).toBe('fl');
});

test('Should return an empty string when there is no common prefix', () => {
    expect(findCommonPrefix(["dog", "racecar", "car"])).toBe('');
});

test('Should return "a" when all strings are identical and contain only "a"', () => {
    expect(findCommonPrefix(["a", "a", "a"])).toBe('a');
});

test('Should return "abc" as the common prefix for ["abcde", "abcef", "abcde"]', () => {
    expect(findCommonPrefix(["abcde", "abcef", "abcde"])).toBe('abc');
});

test('Should return an empty string when one or more strings are empty', () => {
    expect(findCommonPrefix(["", ""])).toBe('');
});

test('Should return "a" when there is only one string "a" in the array', () => {
    expect(findCommonPrefix(["a"])).toBe('a');
});

test('Should return the entire string "apple" when all strings are identical', () => {
    expect(findCommonPrefix(["apple", "apple", "apple"])).toBe('apple');
});

test('Should return "app" as the common prefix for ["app", "apple", "applet"]', () => {
    expect(findCommonPrefix(["app", "apple", "applet"])).toBe('app');
});

test('Should return "inter" as the common prefix for ["intersect", "interval", "interview"]', () => {
    expect(findCommonPrefix(["intersect", "interval", "interview"])).toBe('inter');
});
