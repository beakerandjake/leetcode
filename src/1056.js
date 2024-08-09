/**
 * A confusing number is a number that when rotated 180 degrees becomes a different
 * number with each digit valid.
 *
 * We can rotate digits of a number by 180 degrees to form new digits.
 *
 *  * When 0, 1, 6, 8, and 9 are rotated 180 degrees, they become 0, 1, 9, 8, and 6
 *    respectively.
 *  * When 2, 3, 4, 5, and 7 are rotated 180 degrees, they become invalid.
 *
 * Note that after rotating a number, we can ignore leading zeros.
 *
 *  * For example, after rotating 8000, we have 0008 which is considered as just 8.
 *
 * Given an integer n, return true if it is a confusing number, or false otherwise.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2019/03/23/1268_1.png]
 *
 *
 * Input: n = 6
 * Output: true
 * Explanation: We get 9 after rotating 6, 9 is a valid number, and 9 != 6.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2019/03/23/1268_2.png]
 *
 *
 * Input: n = 89
 * Output: true
 * Explanation: We get 68 after rotating 89, 68 is a valid number and 68 != 89.
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2019/03/26/1268_3.png]
 *
 *
 * Input: n = 11
 * Output: false
 * Explanation: We get 11 after rotating 11, 11 is a valid number but the value remains the same, thus 11 is not a confusing number
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= n <= 109
 *
 *
 *
 * https://leetcode.com/problems/confusing-number
 */

// iterates each digit of the number from left to right
const iterateDigits = function* (number) {
  const str = `${number}`;
  for (const digit of str) {
    yield Number(digit);
  }
};

// returns true if every digit can be rotated 180 degrees
const isValid = (() => {
  const invalidDigits = new Set([2, 3, 4, 5, 7]);
  return (digits) => digits.every((digit) => !invalidDigits.has(digit));
})();

// rotates the digits by 180 degrees and returns a new array of digits
const rotate180 = (() => {
  const inverseMap = new Map([
    [0, 0],
    [1, 1],
    [6, 9],
    [8, 8],
    [9, 6],
  ]);
  return (digits) => digits.reverse().map((digit) => inverseMap.get(digit));
})();

// converts an array of digits to a number
const toNumber = (digits) => Number(digits.join(''));

/**
 * @param {number} n
 * @return {boolean}
 */
export const confusingNumber = (n) => {
  const digits = [...iterateDigits(n)];
  return isValid(digits) && toNumber(rotate180(digits)) !== n;
};
