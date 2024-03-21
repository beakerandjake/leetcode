/**
 * Given two strings s and t, return true if they are equal when both are typed
 * into empty text editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "ab#c", t = "ad#c"
 * Output: true
 * Explanation: Both s and t become "ac".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "ab##", t = "c#d#"
 * Output: true
 * Explanation: Both s and t become "".
 *
 *
 * Example 3:
 *
 *
 * Input: s = "a#c", t = "b"
 * Output: false
 * Explanation: s becomes "c" while t becomes "b".
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length, t.length <= 200
 *  * s and t only contain lowercase letters and '#' characters.
 *
 *
 *
 * Follow up: Can you solve it in O(n) time and O(1) space?
 *
 *
 *
 * https://leetcode.com/problems/backspace-string-compare
 */

const buildStrings = (() => {
  const isBackspace = (key) => key === '#';

  const type = (input) => {
    const output = [];
    for (const key of input) {
      if (isBackspace(key)) {
        output.pop();
      } else {
        output.push(key);
      }
    }

    return output.join('');
  };

  return (s, t) => type(s) === type(t);
})();

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const backspaceCompare = buildStrings;
