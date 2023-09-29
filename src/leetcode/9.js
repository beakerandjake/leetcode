/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

const functional = (x) => {
  const digits = (num) => [...`${num}`];
  const reverse = (arr) => [...arr].reverse();
  const equals = (a, b) => a.every((digit, i) => digit === b[i]);
  return equals(digits(x), reverse(digits(x)));
};


/**
 * @param {number} x
 * @return {boolean}
 */
export const isPalindrome = functional;
