const plusOne = function (digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      let temp = digits[i] + carry;
      digits[i] = temp % 10;
      carry = Math.floor(temp / 10);
      break;
    }

    i !== 0 ? (digits[i] = 0) : (digits[i] += 1);
  }

  digits[0] > 9 ? valueDigits(digits) : null;

  function valueDigits(digits) {
    digits[0] = 0;
    digits.unshift(1);
  }

  if (digits.length === 0) {
    throw new Error('Input array cannot be empty');
  } 

  if (digits.some(element => typeof element !== 'number')) {
    throw new Error('Invalid input: array must contain only digits');
  }

  return digits;
};

module.exports = plusOne;