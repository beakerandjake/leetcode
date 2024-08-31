/**
 * Given an integer n, return the number of structurally unique BST's (binary
 * search trees) which has exactly n nodes of unique values from 1 to n.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/01/18/uniquebstn3.jpg]
 *
 *
 * Input: n = 3
 * Output: 5
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1
 * Output: 1
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n <= 19
 *
 *
 *
 * https://leetcode.com/problems/unique-binary-search-trees
 */

/**
 * @param {number} n
 * @return {number}
 */
export const numTrees = (n) => {
  const memo = Array(n).fill(null);
  const dp = (x) => {
    if (x <= 1) {
      return 1;
    }
    if (memo[x] == null) {
      let result = 0;
      for (let i = 1; i <= x; i++) {
        const left = dp(i - 1);
        const right = dp(x - i);
        result += left * right;
      }
      memo[x] = result;
    }
    return memo[x];
  };
  return dp(n);
};
