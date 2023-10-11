/**
 * Given a m x n grid filled with non-negative numbers,
 * find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 */

const getShape = (grid) => ({ height: grid.length, width: grid[0].length });

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const minPathSum = (grid) => {
  const { width, height } = getShape(grid);
  const dp = [...Array(height + 1)].map(() =>
    Array(width + 1).fill(Number.MAX_SAFE_INTEGER)
  );
  dp[0][1] = 0;

  for (let x = 1; x <= width; x++) {
    for (let y = 1; y <= height; y++) {
      const current = grid[y - 1][x - 1];
      dp[y][x] = Math.min(current + dp[y - 1][x], current + dp[y][x - 1]);
    }
  }
  return dp[height][width];
};
