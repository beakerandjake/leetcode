/**
 * Write an algorithm to determine if a number n is happy.
 *
 * A happy number is a number defined by the following process:
 *
 *     Starting with any positive integer, replace the number by the sum of the squares of its digits.
 *     Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 *     Those numbers for which this process ends in 1 are happy.
 *
 * Return true if n is a happy number, and false if not.
 *
 * Example 1:
 *  Input: n = 19
 *  Output: true
 *  Explanation:
 *  12 + 92 = 82
 *  82 + 22 = 68
 *  62 + 82 = 100
 *  12 + 02 + 02 = 1
 */

const simple = (n) => {
  const digits = (number) => [...`${number}`].map((x) => +x);
  const squared = (numbers) => numbers.map((x) => x * x);
  const sum = (numbers) => numbers.reduce((total, x) => total + x, 0);

  let sumOfSquares = n;
  const encountered = new Set();
  while (sumOfSquares !== 1 && !encountered.has(sumOfSquares)) {
    encountered.add(sumOfSquares);
    sumOfSquares = sum(squared(digits(sumOfSquares)));
  }
  return sumOfSquares === 1;
};

const simple2 = (n) => {
  const getSumOfSquares = (number) => {
    let toReturn = 0;
    let current = number;
    while (current > 0) {
      const digit = current % 10;
      toReturn += digit * digit;
      current = Math.floor(current / 10);
    }
    return toReturn;
  };

  let sumOfSquares = n;
  const encountered = new Set();
  while (sumOfSquares !== 1 && !encountered.has(sumOfSquares)) {
    encountered.add(sumOfSquares);
    sumOfSquares = getSumOfSquares(sumOfSquares);
  }
  return sumOfSquares === 1;
};

/**
 * @param {number} n
 * @return {boolean}
 */
export const isHappy = simple2;
