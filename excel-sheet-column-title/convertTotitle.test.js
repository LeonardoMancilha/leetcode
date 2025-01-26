const convertToTitle = require("./convertTotitle");

test("should return correct column number", () => {
  expect(convertToTitle(1)).toBe("A");
  expect(convertToTitle(28)).toBe("AB");
  expect(convertToTitle(701)).toBe("ZY");
  expect(convertToTitle(26)).toBe("Z");
  expect(convertToTitle(52)).toBe("AZ");
  expect(convertToTitle(18278)).toBe("ZZZ");
});

test("should throw error for invalid input", () => {
  expect(() => convertToTitle(0)).toThrow(
    "Invalid input. Input must be a positive integer."
  );
  expect(() => convertToTitle(-1)).toThrow(
    "Invalid input. Input must be a positive integer."
  );
  expect(() => convertToTitle(1.5)).toThrow(
    "Invalid input. Input must be a positive integer."
  );
  expect(() => convertToTitle("string")).toThrow(
    "Invalid input. Input must be a positive integer."
  );
  expect(() => convertToTitle(null)).toThrow(
    "Invalid input. Input must be a positive integer."
  );
  expect(() => convertToTitle(undefined)).toThrow(
    "Invalid input. Input must be a positive integer."
  );
  expect(() => convertToTitle(NaN)).toThrow(
    "Invalid input. Input must be a positive integer."
  );
});
