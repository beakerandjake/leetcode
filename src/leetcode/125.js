/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

const sanitize = (str) => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

const recursive = (str, left, right) => {
  if (!str.length) {
    return true;
  }
  if (left >= right) {
    return true;
  }
  if (str[left] !== str[right]) {
    return false;
  }
  return recursive(str, left + 1, right - 1);
};

const iterative = (str) => {
  for (let l = 0, r = str.length - 1; l < r; l++, r--) {
    if (str[l] !== str[r]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = (str) => {
  const sanitized = sanitize(str);
  return recursive(sanitized, 0, sanitized.length - 1);
};
