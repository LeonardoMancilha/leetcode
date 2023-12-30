function findMissingNumbers(arr){
    let newArr = [];
    for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
      if (arr.indexOf(i) === -1) { newArr.push(i); }
    }
    return newArr;
}
  
const numeros = [-3, -2, 1, 5];
const result = findMissingNumbers(numeros);
console.log(result);
