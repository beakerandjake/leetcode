/**
 * Given an integer num, repeatedly add all its digits until the result has only
 * one digit, and return it.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: num = 38
 * Output: 2
 * Explanation: The process is
 * 38 --> 3 + 8 --> 11
 * 11 --> 1 + 1 --> 2
 * Since 2 has only one digit, return it.
 *
 *
 * Example 2:
 *
 *
 * Input: num = 0
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= num <= 231 - 1
 *
 *
 *
 * Follow up: Could you do it without any loop/recursion in O(1) runtime?
 *
 *
 *
 * https://leetcode.com/problems/add-digits
 */

const digits = (num) => {
  if (!num) {
    return ['0'];
  }
  const toReturn = [];
  let current = num;
  while (current) {
    toReturn.push(current % 10);
    current = Math.floor(current / 10);
  }
  return toReturn.reverse();
};

const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

/**
 * @param {number} num
 * @return {number}
 */
export const addDigits = (num) => (num < 10 ? num : addDigits(sum(digits(num))));
