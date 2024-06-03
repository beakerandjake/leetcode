/**
 * Write a function that reverses a string. The input string is given as an array
 * of characters s.
 *
 * You must do this by modifying the input array in-place
 * [https://en.wikipedia.org/wiki/In-place_algorithm] with O(1) extra memory.
 *
 *
 *
 * Example 1:
 *
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 *
 *
 * Example 2:
 *
 * Input: s = ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 105
 *  * s[i] is a printable ascii character
 *    [https://en.wikipedia.org/wiki/ASCII#Printable_characters].
 *
 *
 *
 * https://leetcode.com/problems/reverse-string
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
export const reverseString = (s) => {
  const doReverse = (left, right) => {
    if (left >= right) {
      return;
    }
    [s[left], s[right]] = [s[right], s[left]];
    doReverse(left + 1, right - 1);
  };
  doReverse(0, s.length - 1);
};
