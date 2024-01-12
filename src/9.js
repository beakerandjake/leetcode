/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

const arraysEqual = (x) => {
  const digits = (num) => [...`${num}`];
  const reverse = (arr) => [...arr].reverse();
  const equals = (a, b) => a.every((digit, i) => digit === b[i]);
  return equals(digits(x), reverse(digits(x)));
};

const arraySymmetrical = (x) => {
  const digits = (num) => {
    const toReturn = [];
    let current = num;
    while (current > 0) {
      toReturn.push(current % 10);
      current = Math.floor(current / 10);
    }
    return toReturn;
  };

  const symmetrical = (arr) => {
    const m = Math.floor(arr.length / 2);
    for (let i = 0; i < m; i++) {
      if (arr[i] !== arr[arr.length - i - 1]) {
        return false;
      }
    }
    return true;
  };

  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }

  return symmetrical(digits(x));
};

/**
 * @param {number} x
 * @return {boolean}
 */
export const isPalindrome = arraySymmetrical;
