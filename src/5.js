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
      for (let j = i; j < str.length; j++) {
        visitFn(str.slice(i, j + 1));
      }
    }
  };

  const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;
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
    substrings(str, (substring) => {
      if (substring.length > longest.length && isPalindrome(substring)) {
        longest = substring;
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
