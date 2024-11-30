const singleNumber = nums => nums.reduce((acc, val) => acc ^ val, 0);

module.exports = singleNumber;
