/**
 * Given a string s, return the longest palindromic substring in s.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cbbd"
 * Output: "bb"
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 1000
 *  * s consist of only digits and English letters.
 *
 *
 *
 * https://leetcode.com/problems/longest-palindromic-substring
 */

const bruteForce = (() => {
  const substrings = (str, visitFn) => {
    for (let i = 0; i < str.length; i++) {
      for (let j = str.length - 1; j >= i; j--) {
        visitFn(i, j);
      }
    }
  };

  const isPalindrome = (str, from, to) => {
    let left = from;
    let right = to;
    while (left <= right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  return (str) => {
    let longest = '';
    substrings(str, (from, to) => {
      if (to - from + 1 > longest.length && isPalindrome(str, from, to)) {
        longest = str.slice(from, to + 1);
      }
    });
    return longest;
  };
})();

/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = bruteForce;
