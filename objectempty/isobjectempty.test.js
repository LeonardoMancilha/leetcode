const isEmpty = require('./isobjectempty');

test('Verifiy if the object is empty', () => {
    expect(isEmpty).toEqual(expect.objectContaining({}));
});