const chunk = function(arr, size) {
    let splittedArrays = [];

    for (let i = 0; i < arr.length; i += size) {
        splittedArrays.push(arr.slice(i, i + size));
    }

    splittedArrays.forEach((subArray, index) => {
        console.log(`Array ${index + 1}: ${subArray}`);
    });

    return splittedArrays;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = chunk(array, 4);
console.log(chunkedArray);
