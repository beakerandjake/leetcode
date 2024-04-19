/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and
 * '0's (water), return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands
 * horizontally or vertically. You may assume all four edges of the grid are all
 * surrounded by water.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ]
 * Output: 3
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == grid.length
 *  * n == grid[i].length
 *  * 1 <= m, n <= 300
 *  * grid[i][j] is '0' or '1'.
 *
 *
 *
 * https://leetcode.com/problems/number-of-islands
 */

const height = (grid) => grid.length;

const width = (grid) => grid[0].length;

const empty = (m, n, fillValue) => [...Array(m)].map(() => Array(n).fill(fillValue));

const isLand = (grid, y, x) => grid[y][x] === '1';

// eslint-disable-next-line func-style
function* neighbors(y, x) {
  yield [y - 1, x], yield [y + 1, x], yield [y, x - 1], yield [y, x + 1];
}

const inBounds = (grid, y, x) => y >= 0 && y < height(grid) && x >= 0 && x < width(grid);

const floodFill = (grid, startY, startX, visited) => {
  const queue = [[startY, startX]];
  visited[startY][startX] = true;
  while (queue.length) {
    const [y, x] = queue.shift();
    for (const [ny, nx] of neighbors(y, x)) {
      if (inBounds(grid, ny, nx) && isLand(grid, ny, nx) && !visited[ny][nx]) {
        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }
  }
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
export const numIslands = (grid) => {
  let result = 0;
  const visited = empty(height(grid), width(grid), false);
  for (let y = 0; y < height(grid); y++) {
    for (let x = 0; x < width(grid); x++) {
      if (isLand(grid, y, x) && !visited[y][x]) {
        result++;
        floodFill(grid, y, x, visited);
      }
    }
  }
  return result;
};
