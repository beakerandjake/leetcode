/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 *     Open brackets must be closed by the same type of brackets.
 *     Open brackets must be closed in the correct order.
 *     Every close bracket has a corresponding open bracket of the same type.
 */

const parenthesesMap = {
  '(': ')',
  '[': ']',
  '{': '}',
};

const isOpeningChar = (char) => char in parenthesesMap;

const closes = (opening, closing) => parenthesesMap[opening] === closing;

/**
 * @param {string} s
 * @return {boolean}
 */
export const isValid = (s) => {
  if (s.length % 2 !== 0) {
    return false;
  }
  const stack = [];
  for (const char of s) {
    if (isOpeningChar(char)) {
      stack.push(char);
    } else if (!closes(stack.pop(), char)) {
      return false;
    }
  }
  return stack.length === 0;
};
