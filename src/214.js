/**
 * You are given a string s. You can convert s to a palindrome by adding characters
 * in front of it.
 *
 * Return the shortest palindrome you can find by performing this transformation.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "aacecaaa"
 * Output: "aaacecaaa"
 *
 *
 * Example 2:
 *
 * Input: s = "abcd"
 * Output: "dcbabcd"
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= s.length <= 5 * 104
 *  * s consists of lowercase English letters only.
 *
 *
 *
 * https://leetcode.com/problems/shortest-palindrome
 */

// reverses a string
const reverse = (str) => [...str].reverse().join('');

// returns the length of the longest prefix palindrome
const prefixPalindromeLength = (str) => {
  let result = str.length;
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      // "reset" the palindrome search from the start of the string
      result--;
      left = 0;
      right = result - 1;
    }
  }
  return result;
};

/**
 * @param {string} s
 * @return {string}
 */
export const shortestPalindrome = (s) => {
  if (s.length === 1) {
    return s;
  }
  return reverse(s.slice(prefixPalindromeLength(s))) + s;
};
