/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

const digits = (num) => [...`${num}`];

const arrIsSymmetrical = (arr) => {
  const length = arr.length;
  const m = Math.floor(length / 2);
  for (let i = 0; i < m; i++) {
    if (arr[i] !== arr[length - i - 1]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number} x
 * @return {boolean}
 */
export const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }

  return arrIsSymmetrical(digits(x));
};
