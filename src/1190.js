/**
 * You are given a string s that consists of lower case English letters and
 * brackets.
 *
 * Reverse the strings in each pair of matching parentheses, starting from the
 * innermost one.
 *
 * Your result should not contain any brackets.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "(abcd)"
 * Output: "dcba"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "(u(love)i)"
 * Output: "iloveu"
 * Explanation: The substring "love" is reversed first, then the whole string is reversed.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "(ed(et(oc))el)"
 * Output: "leetcode"
 * Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 2000
 *  * s only contains lower case English characters and parentheses.
 *  * It is guaranteed that all parentheses are balanced.
 *
 *
 *
 * https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses
 */

/**
 * @param {string} s
 * @return {string}
 */
export const reverseParentheses = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ')') {
      stack.push(s[i]);
    } else {
      // hit a closing paren, need to reverse all chars between open and close.
      // use temp stack to re-push the chars on the stack, having the effect of reversing them
      const temp = [];
      while (stack.at(-1) !== '(') {
        temp.push(stack.pop());
      }
      // ensure the opening paren is discarded.
      stack.pop();
      stack.push(...temp);
    }
  }
  return stack.join('');
};
