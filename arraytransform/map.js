const originalArray = [1, 2, 3, 4, 5];

var map = function(arr, fn) {
    const returnedArray = [];

    for (let i = 0; i < arr.length; i++) {
        const transformedElement = fn(arr[i], i);
        returnedArray.push(transformedElement);
    }
    return returnedArray;
};

const transformedArray = map(originalArray, (element, index) => {
    return element + index; 
});
console.log(transformedArray);

module.exports = map;