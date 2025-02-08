const majorityElement = function(nums) {
    if (nums.length === 0) return -1;

    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    let occurrences = nums.filter(num => num === candidate).length;
    return occurrences > nums.length / 2 ? candidate : -1;
};

const nums = [1, 1, 1, 2, 2, 2, 3, 3, 3];
console.log(majorityElement(nums)); // 3

module.exports = majorityElement;
