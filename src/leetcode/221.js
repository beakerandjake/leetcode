/**
 * Given an m x n binary matrix filled with 0's and 1's,
 * find the largest square containing only 1's and return its area.
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
export const maximalSquare = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const dp = [...Array(rows + 1)].map(() => Array(cols + 1).fill(0));
  let biggest = 0;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
        biggest = Math.max(biggest, dp[i][j]);
      }
    }
  }
  return biggest ** 2;
};
