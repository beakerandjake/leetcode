/**
 * Given an integer n, break it into the sum of k positive integers, where k >= 2,
 * and maximize the product of those integers.
 *
 * Return the maximum product you can get.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: n = 2
 * Output: 1
 * Explanation: 2 = 1 + 1, 1 × 1 = 1.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 10
 * Output: 36
 * Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 2 <= n <= 58
 *
 *
 *
 * https://leetcode.com/problems/integer-break
 */

/**
 * @param {number} n
 * @return {number}
 */
export const integerBreak = (n) => {
  if (!n) {
    return 0;
  }
  if (n <= 3) {
    return n - 1;
  }
  const memo = new Map();
  const dp = (num) => {
    if (num <= 3) {
      return num;
    }
    if (!memo.has(num)) {
      let max = num;
      for (let i = 2; i <= num; i++) {
        max = Math.max(max, i * dp(num - i));
      }
      memo.set(num, max);
    }
    return memo.get(num);
  };
  return dp(n);
};
