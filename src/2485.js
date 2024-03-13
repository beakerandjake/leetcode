/**
 * Given a positive integer n, find the pivot integer x such that:
 *
 *  * The sum of all elements between 1 and x inclusively equals the sum of all
 *    elements between x and n inclusively.
 *
 * Return the pivot integer x. If no such integer exists, return -1. It is
 * guaranteed that there will be at most one pivot index for the given input.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: n = 8
 * Output: 6
 * Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1
 * Output: 1
 * Explanation: 1 is the pivot integer since: 1 = 1.
 *
 *
 * Example 3:
 *
 *
 * Input: n = 4
 * Output: -1
 * Explanation: It can be proved that no such integer exist.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n <= 1000
 *
 *
 *
 * https://leetcode.com/problems/find-the-pivot-integer
 */

// returns an array containing numbers 1 to n.
const fill = (n) => [...Array(n)].map((_, i) => i + 1);

// returns the cumulative sum of the array from left to right.
const forwardSums = (arr) => {
  let sum = 0;
  return arr.map((x) => {
    sum += x;
    return sum;
  });
};

// returns the cumulative sum of the array from right to left.
const backwardSums = (arr) => forwardSums([...arr].reverse()).reverse();

/**
 * @param {number} n
 * @return {number}
 */
export const pivotInteger = (n) => {
  const nums = fill(n);
  const forwards = forwardSums(nums);
  const backwards = backwardSums(nums);
  const pivotIndex = forwards.findIndex((x, i) => x === backwards[i]);
  return pivotIndex !== -1 ? pivotIndex + 1 : pivotIndex;
};
