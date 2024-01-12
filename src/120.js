/**
 * Given a triangle array, return the minimum path sum from top to bottom.
 * For each step, you may move to an adjacent number of the row below.
 * More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
 */

const topDown = (triangle) => {
  const memo = new Map();
  const dp = (y, x) => {
    if (y >= triangle.length || x >= triangle[y].length) {
      return Number.MAX_SAFE_INTEGER;
    }
    if (y === triangle.length - 1) {
      return triangle[y][x];
    }
    const hash = `${y}.${x}`;
    if (!memo.has(hash)) {
      const current = triangle[y][x];
      memo.set(hash, Math.min(current + dp(y + 1, x), current + dp(y + 1, x + 1)));
    }
    return memo.get(hash);
  };
  return dp(0, 0);
};

/**
 * @param {number[][]} triangle
 * @return {number}
 */
export const minimumTotal = topDown;
