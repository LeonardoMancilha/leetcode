const sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

const result = sortBy(mixedNumericArray);
console.log(result);
