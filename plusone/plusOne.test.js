const plusOne = require("./plusone");

test("should add 1 to a number without carry-over", () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  expect(plusOne([9, 9])).toEqual([1, 0, 0]);
  expect(plusOne([0])).toEqual([1]);
  expect(plusOne([8])).toEqual([9]);
  expect(plusOne([1, 9, 9])).toEqual([2, 0, 0]);
  expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
});

test("should handle carry-over correctly", () => {
  expect(plusOne([1, 9, 9])).toEqual([2, 0, 0]);
});

test("should increase array size when all digits are 9", () => {
  expect(plusOne([9, 9])).toEqual([1, 0, 0]);
});

test("should handle single digit addition", () => {
  expect(plusOne([8])).toEqual([9]);
  expect(plusOne([9])).toEqual([1, 0]);
});

test("should ignore leading zeros", () => {
  expect(plusOne([0, 1, 2])).toEqual([0, 1, 3]);
});

test("should handle multiple 9s and carry-over", () => {
  expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
});

test("should throw an error if input array is empty", () => {
  expect(() => plusOne([])).toThrow("Input array cannot be empty");
});

test("should throw an error if input array contains non-numeric values", () => {
  expect(() => plusOne([1, "a", 3])).toThrow(
    "Invalid input: array must contain only digits"
  );
});

test("should not throw an error for a valid numeric array", () => {
  expect(() => plusOne([1, 2, 3])).not.toThrow();
  expect(() => plusOne([0])).not.toThrow();
  expect(() => plusOne([9, 9])).not.toThrow();
});
