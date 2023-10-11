/**
 * Given a m x n grid filled with non-negative numbers,
 * find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 */

const getShape = (grid) => ({ height: grid.length, width: grid[0].length });

const bottomUp = (grid) => {
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

const topDown = (grid) => {
  const shape = getShape(grid);
  const memo = new Map();
  const dp = (y, x) => {
    if (y === 0 && x === 0) {
      return grid[y][x];
    }
    if (y < 0 || x < 0) {
      return Number.MAX_SAFE_INTEGER;
    }
    const hash = `${y}.${x}`;
    if (!memo.has(hash)) {
      const current = grid[y][x];
      memo.set(hash, Math.min(current + dp(y - 1, x), current + dp(y, x - 1)));
    }
    return memo.get(hash);
  };
  return dp(shape.height - 1, shape.width - 1);
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const minPathSum = bottomUp;
