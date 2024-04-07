/**
 * Given a string s containing only three types of characters: '(', ')' and '*',
 * return true if s is valid.
 *
 * The following rules define a valid string:
 *
 *  * Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 *  * Any right parenthesis ')' must have a corresponding left parenthesis '('.
 *  * Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 *  * '*' could be treated as a single right parenthesis ')' or a single left
 *    parenthesis '(' or an empty string "".
 *
 *
 *
 * Example 1:
 *
 * Input: s = "()"
 * Output: true
 *
 *
 * Example 2:
 *
 * Input: s = "(*)"
 * Output: true
 *
 *
 * Example 3:
 *
 * Input: s = "(*))"
 * Output: true
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 100
 *  * s[i] is '(', ')' or '*'.
 *
 *
 *
 * https://leetcode.com/problems/valid-parenthesis-string
 */

/**
 * @param {string} s
 * @return {boolean}
 */
export const checkValidString = (s) => {
  const memo = new Map();
  const recurse = (str, index, openCount) => {
    if (!str.length || index >= str.length) {
      return openCount ? 0 : 1;
    }
    const hash = `${index}_${openCount}`;
    if (!memo.has(hash)) {
      let result;
      if (str[index] === '(') {
        result = recurse(str, index + 1, openCount + 1);
      } else if (str[index] === ')') {
        result = openCount ? recurse(str, index + 1, openCount - 1) : 0;
      } else {
        result = Math.max(
          recurse(str, index + 1, openCount + 1),
          openCount ? recurse(str, index + 1, openCount - 1) : 0,
          recurse(str, index + 1, openCount)
        );
      }
      memo.set(hash, result);
    }
    return memo.get(hash);
  };
  return !!recurse(s, 0, 0);
};
