/**
 * In a gold mine grid of size m x n, each cell in this mine has an integer
 * representing the amount of gold in that cell, 0 if it is empty.
 *
 * Return the maximum amount of gold you can collect under the conditions:
 *
 *  * Every time you are located in a cell you will collect all the gold in that
 *    cell.
 *  * From your position, you can walk one step to the left, right, up, or down.
 *  * You can't visit the same cell more than once.
 *  * Never visit a cell with 0 gold.
 *  * You can start and stop collecting gold from any position in the grid that has
 *    some gold.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
 * Output: 24
 * Explanation:
 * [[0,6,0],
 *  [5,8,7],
 *  [0,9,0]]
 * Path to get the maximum gold, 9 -> 8 -> 7.
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
 * Output: 28
 * Explanation:
 * [[1,0,7],
 *  [2,0,6],
 *  [3,4,5],
 *  [0,3,0],
 *  [9,0,20]]
 * Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == grid.length
 *  * n == grid[i].length
 *  * 1 <= m, n <= 15
 *  * 0 <= grid[i][j] <= 100
 *  * There are at most 25 cells containing gold.
 *
 *
 *
 * https://leetcode.com/problems/path-with-maximum-gold
 */

// returns a new matrix of size (m x n) filled with the specified value.
const fill = (m, n, value) => [...Array(m)].map(() => Array(n).fill(value));

// returns the height of the matrix
const height = (matrix) => matrix.length;

// returns the width of the matrix.
const width = (matrix) => matrix[0].length;

// returns true if the point has gold.
const hasGold = (matrix, y, x) => matrix[y][x] > 0;

// returns true if the point is within the matrix.
const inBounds = (matrix, y, x) =>
  y >= 0 && y < height(matrix) && x >= 0 && x < width(matrix);

// eslint-disable-next-line func-style
function* neighbors(matrix, y, x) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // yield each neighbor that is in bounds of the matrix.
  for (const [dY, dX] of directions) {
    const nY = y + dY;
    const nX = x + dX;
    if (inBounds(matrix, nY, nX)) {
      yield [nY, nX];
    }
  }
}

// explores all paths originating from the specified point and returns the max path value.
const backtrack = (matrix, y, x, visited) => {
  if (!hasGold(matrix, y, x)) {
    return 0;
  }
  let max = 0;
  for (const [nY, nX] of neighbors(matrix, y, x)) {
    if (!visited[nY][nX]) {
      // visit, explore, then un-visit the path going through this neighbor.
      visited[nY][nX] = true;
      max = Math.max(max, backtrack(matrix, nY, nX, visited));
      visited[nY][nX] = false;
    }
  }
  return matrix[y][x] + max;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const getMaximumGold = (grid) => {
  let max = 0;
  const visited = fill(height(grid, width(grid), false));
  for (let y = 0; y < height(grid); y++) {
    for (let x = 0; x < width(grid); x++) {
      // find the max value which can be obtained starting from this cell.
      if (hasGold(grid, y, x)) {
        visited[y][x] = true;
        max = Math.max(max, backtrack(grid, y, x, visited));
        visited[y][x] = false;
      }
    }
  }
  return max;
};
