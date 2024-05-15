const chunk = function(arr, size) {
    let splittedArrays = arr.reduce((result, index) => {
    if (index % size === 0) {
      result.push(arr.slice(index, index + size));  
    }
    return result;
  }, []);

  splittedArrays.forEach((subArray, index) => {
    console.log(`Array ${index + 1}: ${subArray}`);
  });

  return splittedArrays;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = chunk(array, 4);
console.log(chunkedArray);