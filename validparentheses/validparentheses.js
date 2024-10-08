export function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let firstElement = s.charAt(i);

    switch (firstElement) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (firstElement !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};
//module.exports = {isValid};
