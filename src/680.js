/**
 * Given a string s, return true if the s can be palindrome after deleting at most
 * one character from it.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "aba"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "abca"
 * Output: true
 * Explanation: You could delete the character 'c'.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "abc"
 * Output: false
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 105
 *  * s consists of lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/valid-palindrome-ii
 */

// returns true if the string is a palindrome
const isPalindrome = (str, left, right) => {
  if (left >= right) {
    return true;
  }
  return str[left] === str[right] && isPalindrome(str, left + 1, right - 1);
};

const bruteForce = (() => {
  // invokes the visitFn for each possible string formed by deleting one character from the string.
  const forEachDeletion = (str, visitFn) => {
    [...str].forEach((_, i, chars) => {
      visitFn([...chars.slice(0, i), ...chars.slice(i + 1)].join(''));
    });
  };

  return (str) => {
    let isValid = false;
    forEachDeletion(str, (deletion) => {
      if (!isValid) {
        isValid = isPalindrome(deletion, 0, deletion.length - 1);
      }
    });
    return isValid;
  };
})();


/**
 * @param {string} str
 * @return {boolean}
 */
export const validPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
};
