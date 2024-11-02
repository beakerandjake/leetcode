/**
 * A parentheses string is valid if and only if:
 *
 *  * It is the empty string,
 *  * It can be written as AB (A concatenated with B), where A and B are valid
 *    strings, or
 *  * It can be written as (A), where A is a valid string.
 *
 * You are given a parentheses string s. In one move, you can insert a parenthesis
 * at any position of the string.
 *
 *  * For example, if s = "()))", you can insert an opening parenthesis to be
 *    "(()))" or a closing parenthesis to be "())))".
 *
 * Return the minimum number of moves required to make s valid.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "())"
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: s = "((("
 * Output: 3
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 1000
 *  * s[i] is either '(' or ')'.
 *
 *
 *
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid
 */

const usingStack = (str) => {
  const stack = [];
  for (const char of str) {
    if (char === ')' && stack.at(-1) === '(') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length;
};

const usingCounting = (str) => {
  let closed = 0;
  let open = 0;
  for (const char of str) {
    if (char === '(') {
      open++;
    } else if (open > 0) {
      open--;
    } else {
      closed++;
    }
  }
  return closed + open;
};

/**
 * @param {string} str
 * @return {number}
 */
export const minAddToMakeValid = usingCounting;
