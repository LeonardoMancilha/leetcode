const lengthOfLastWord = require('./lastlengthword');

test('should return correctly zero when the string is empty', () => {
    expect(lengthOfLastWord('')).toBe(0);
});

test('should return 0 when the string contains only spaces', () => {
    expect(lengthOfLastWord(' ')).toBe(0);
});

test('should return 4 for the last word in " fly me to  the moon"', () => {
    expect(lengthOfLastWord(' fly me to  the moon')).toBe(4);
});

test('should return the correct length of a word without spaces.', () => {
    expect(lengthOfLastWord('Hello')).toBe(5);
});

test('should return the correct length of the last word in "Hello World"', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
});

test('should return the length of the last word of a multi-word sentence.', () => {
    expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
});

test('should remove extra spaces and still return the correct length of the last word.', () => {
    expect(lengthOfLastWord(' lorem ipsum  sit ')).toBe(3);
});

test('should correctly handles words of various lengths and returns the correct length of the last one.', () => {
    expect(lengthOfLastWord('lorem hello world joyboy programmer theoretically')).toBe(13);
});
