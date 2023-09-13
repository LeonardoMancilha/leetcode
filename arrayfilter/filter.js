let filter = function(arr, fn) {
    let filteredArr = [];
    let i = 0;

    for (let num of arr)
      if (fn(num, i++))
           filteredArr.push(num);
    return filteredArr;
};

arr = [10, 20, 30];

function fn(n, i) {
  return n > 10 && i === 0;
}

let newArray = filter(arr, fn);
console.log(newArray);
