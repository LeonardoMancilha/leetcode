const map = require('./map');

test('Teste de transformações', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const transformedArray = map(originalArray, (element, index) => {
        return element + index; 
    });

    expect(transformedArray).toEqual([1, 3, 5, 7, 9]);
});