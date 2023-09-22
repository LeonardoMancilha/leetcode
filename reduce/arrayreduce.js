const reduce = function(nums, fn, init) {
    let result = init;
    
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
};

const nums = [1, 2, 3, 4, 5];
const myReduce = (accumulator, currentValue) => accumulator + currentValue;
const valueInitial = 0;

const result = reduce(nums, myReduce, valueInitial);
console.log(result);
