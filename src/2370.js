/**
 * You are given a string s consisting of lowercase letters and an integer k. We
 * call a string t ideal if the following conditions are satisfied:
 *
 *  * t is a subsequence of the string s.
 *  * The absolute difference in the alphabet order of every two adjacent letters
 *    in t is less than or equal to k.
 *
 * Return the length of the longest ideal string.
 *
 * A subsequence is a string that can be derived from another string by deleting
 * some or no characters without changing the order of the remaining characters.
 *
 * Note that the alphabet order is not cyclic. For example, the absolute difference
 * in the alphabet order of 'a' and 'z' is 65, not 1.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "acfgbd", k = 2
 * Output: 4
 * Explanation: The longest ideal string is "acbd". The length of this string is 4, so 4 is returned.
 * Note that "acfgbd" is not ideal because 'c' and 'f' have a difference of 3 in alphabet order.
 *
 * Example 2:
 *
 *
 * Input: s = "abcd", k = 3
 * Output: 4
 * Explanation: The longest ideal string is "abcd". The length of this string is 4, so 4 is returned.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 105
 *  * 0 <= k <= 25
 *  * s consists of lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/longest-ideal-subsequence
 */

const charCode = (char) => char.charCodeAt(0);

const absoluteDifference = (a, b) => Math.abs(charCode(a) - charCode(b));

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
export const longestIdealString = (s, k) => {
  // memo is 2d array of height (string length) and width (27 chars a-z and null str)
  const memo = [...Array(s.length)].map(() => Array(27).fill(-1));
  const dp = (last, index) => {
    if (index >= s.length) {
      return 0;
    }
    // map empty string to index 0, map a-z from 1-26
    const memoIndex = !last ? 0 : charCode(last) - 96;
    if (memo[index][memoIndex] === -1) {
      let use = 0;
      // use current character if close enough to last letter.
      if (!last || absoluteDifference(last, s[index]) <= k) {
        use = 1 + dp(s[index], index + 1);
      }
      // skip this character
      const skip = dp(last, index + 1);
      // best result is either using the char (if possible, or skipping it)
      memo[index][memoIndex] = Math.max(use, skip);
    }
    return memo[index][memoIndex];
  };
  return dp('', 0);
};
