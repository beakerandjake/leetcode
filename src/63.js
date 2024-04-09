/**
 * You are given an m x n integer array grid. There is a robot initially located at
 * the top-left corner (i.e., grid[0][0]). The robot tries to move to the
 * bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either
 * down or right at any point in time.
 *
 * An obstacle and space are marked as 1 or 0 respectively in grid. A path that the
 * robot takes cannot include any square that is an obstacle.
 *
 * Return the number of possible unique paths that the robot can take to reach the
 * bottom-right corner.
 *
 * The testcases are generated so that the answer will be less than or equal to 2 *
 * 109.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/11/04/robot1.jpg]
 *
 *
 * Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
 * Output: 2
 * Explanation: There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/11/04/robot2.jpg]
 *
 *
 * Input: obstacleGrid = [[0,1],[0,0]]
 * Output: 1
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == obstacleGrid.length
 *  * n == obstacleGrid[i].length
 *  * 1 <= m, n <= 100
 *  * obstacleGrid[i][j] is 0 or 1.
 *
 *
 *
 * https://leetcode.com/problems/unique-paths-ii
 */

// returns an m x n matrix filled with the value.
const fill = (m, n, value) => [...Array(m)].map(() => Array(n).fill(value));

// returns the height of the matrix.
const height = (matrix) => matrix.length;

// returns the width of the matrix.
const width = (matrix) => matrix[0].length;

// returns true if the position is within the bounds of the matrix.
const inBounds = (matrix, y, x) =>
  y >= 0 && y < height(matrix) && x >= 0 && x < width(matrix);

/**
 * @param {number[][]} world
 * @return {number}
 */
export const uniquePathsWithObstacles = (world) => {
  const memo = fill(height(world), width(world), -1);
  const targetY = height(world) - 1;
  const targetX = width(world) - 1;
  const dp = (y, x) => {
    // no path to target if out of bounds.
    if (!inBounds(world, y, x)) {
      return 0;
    }
    // no path to target if at obstacle
    if (world[y][x] === 1) {
      return 0;
    }
    // we found one path to target if at target.
    if (y === targetY && x === targetX) {
      return 1;
    }
    if (memo[y][x] === -1) {
      // calculate the number of paths to target by moving down or moving right.
      memo[y][x] = dp(y + 1, x) + dp(y, x + 1);
    }
    return memo[y][x];
  };
  return dp(0, 0);
};
