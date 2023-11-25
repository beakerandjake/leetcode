/**
 * There is a robot on an m x n grid. The robot is initially located at the
 * top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right
 * corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right
 * at any point in time.
 *
 * Given the two integers m and n, return the number of possible unique paths that
 * the robot can take to reach the bottom-right corner.
 *
 * The test cases are generated so that the answer will be less than or equal to 2
 * * 109.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png]
 *
 *
 * Input: m = 3, n = 7
 * Output: 28
 *
 *
 * Example 2:
 *
 *
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 * 1. Right -> Down -> Down
 * 2. Down -> Down -> Right
 * 3. Down -> Right -> Down
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= m, n <= 100
 *
 *
 *
 * https://leetcode.com/problems/unique-paths
 */

const topDown = (m, n) => {
  const memo = [...Array(m)].map(() => Array(n).fill(-1));
  const dp = (x, y) => {
    if (y < 0 || y >= m || x < 0 || x >= n) {
      return 0;
    }
    if (y === m - 1 && x === n - 1) {
      return 1;
    }

    if (memo[y][x] === -1) {
      memo[y][x] = dp(x + 1, y) + dp(x, y + 1);
    }
    return memo[y][x];
  };
  return dp(0, 0);
};

const bottomUp = (m, n) => {
  const dp = [...Array(m + 1)].map(() => Array(n + 1).fill(0));
  dp[0][1] = 1;
  for (let y = 1; y <= m; y++) {
    for (let x = 1; x <= n; x++) {
      dp[y][x] = dp[y - 1][x] + dp[y][x - 1];
    }
  }
  return dp[m][n];
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
export const uniquePaths = bottomUp;
