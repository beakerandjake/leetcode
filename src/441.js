/**
 * You have n coins and you want to build a staircase with these coins. The
 * staircase consists of k rows where the ith row has exactly i coins. The last row
 * of the staircase may be incomplete.
 *
 * Given the integer n, return the number of complete rows of the staircase you
 * will build.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/04/09/arrangecoins1-grid.jpg]
 *
 *
 * Input: n = 5
 * Output: 2
 * Explanation: Because the 3rd row is incomplete, we return 2.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/04/09/arrangecoins2-grid.jpg]
 *
 *
 * Input: n = 8
 * Output: 3
 * Explanation: Because the 4th row is incomplete, we return 3.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n <= 231 - 1
 *
 *
 *
 * https://leetcode.com/problems/arranging-coins
 */

const doArrange = (n, i) => {
  if (n <= 0 || n < i) {
    return 0;
  }
  return 1 + doArrange(n - i, i + 1);
};

/**
 * @param {number} n
 * @return {number}
 */
export const arrangeCoins = (n) => doArrange(n, 1);
