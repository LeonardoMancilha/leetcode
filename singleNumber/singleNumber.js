const singleNumber = function (nums) {
  return nums.reduce((acc, val) => acc ^ val, 0);
};

module.exports = singleNumber;
