const convertToTitle = function (columnNumber) {
  columnNumber = Number(columnNumber);

  if (!Number.isInteger(columnNumber) || columnNumber <= 0) {
    throw new Error("Invalid input. Input must be a positive integer.");
  }

  const title = [];
  while (columnNumber > 0) {
    const remainder = (columnNumber - 1) % 26;
    title.unshift(String.fromCharCode(65 + remainder));
    columnNumber = Math.floor((columnNumber - remainder) / 26);
  }
  return title.join("");
};

console.log(convertToTitle(1));

module.exports = convertToTitle;
