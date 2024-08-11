/**
 * You are given an m x n binary grid grid where 1 represents land and 0 represents
 * water. An island is a maximal 4-directionally (horizontal or vertical) connected
 * group of 1's.
 *
 * The grid is said to be connected if we have exactly one island, otherwise is
 * said disconnected.
 *
 * In one day, we are allowed to change any single land cell (1) into a water cell
 * (0).
 *
 * Return the minimum number of days to disconnect the grid.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/12/24/land1.jpg]
 *
 *
 * Input: grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]
 *
 * Output: 2
 * Explanation: We need at least 2 days to get a disconnected grid.
 * Change land grid[1][1] and grid[0][2] to water and get 2 disconnected island.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/12/24/land2.jpg]
 *
 *
 * Input: grid = [[1,1]]
 * Output: 2
 * Explanation: Grid of full water is also disconnected ([[1,1]] -> [[0,0]]), 0 islands.
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == grid.length
 *  * n == grid[i].length
 *  * 1 <= m, n <= 30
 *  * grid[i][j] is either 0 or 1.
 *
 *
 *
 * https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island
 */

// mapping of vectors which point to each cardinal direction.
const DIRECTIONS = {
  right: [0, 1],
  down: [1, 0],
  left: [0, -1],
  up: [-1, 0],
};

// the value of a water cell.
const WATER = 0;

// the value of a land cell.
const LAND = 1;

// creates a new matrix of size (m x n) filled with the value.
const empty = (m, n, value) => [...Array(m)].map(() => Array(n).fill(value));

// returns a copy of the matrix.
const copy = (matrix) => matrix.map((row) => [...row]);

// returns the height of the matrix.
const height = (matrix) => matrix.length;

// returns the width of the matrix.
const width = (matrix) => matrix[0].length;

// iterates each cell of the matrix.
const iterate = function* (matrix) {
  for (let y = 0; y < height(matrix); y++) {
    for (let x = 0; x < width(matrix); x++) {
      yield [matrix[y][x], y, x];
    }
  }
};

// returns true if the cell is in bounds of the matrix.
const inBounds = (matrix, y, x) =>
  y >= 0 && y < height(matrix) && x >= 0 && x < width(matrix);

// iterates each cardinal neighbor of the cell that is in bounds of the matrix.
const neighbors = function* (matrix, y, x) {
  for (const [dY, dX] of Object.values(DIRECTIONS)) {
    const nY = y + dY;
    const nX = x + dX;
    if (inBounds(matrix, nY, nX)) {
      yield [nY, nX];
    }
  }
};

// explores all the land connected to the starting point.
const bfs = (matrix, startY, startX, visited) => {
  const queue = [[startY, startX]];
  visited[startY][startX] = true;
  while (queue.length) {
    const [y, x] = queue.shift();
    for (const [nY, nX] of neighbors(matrix, y, x)) {
      if (!visited[nY][nX] && matrix[nY][nX] === LAND) {
        visited[nY][nX] = true;
        queue.push([nY, nX]);
      }
    }
  }
};

// returns the number of islands in the matrix
const islandCount = (matrix) => {
  let result = 0;
  const visited = empty(height(matrix), width(matrix), false);
  // flood fill to determine island count
  for (const [cell, y, x] of iterate(matrix)) {
    if (!visited[y][x] && cell === LAND) {
      bfs(matrix, y, x, visited);
      result++;
    }
  }
  return result;
};

// returns a copy of the matrix with the land cell at <y,x> converted to water
const deleteLand = (matrix, y, x) => {
  const result = copy(matrix);
  result[y][x] = WATER;
  return result;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const minDays = (grid) => {
  // already disconnected if not exactly one island
  if (islandCount(grid) !== 1) {
    return 0;
  }
  // see if deleting any single land cell disconnects the grid
  for (const [cell, y, x] of iterate(grid)) {
    if (cell === LAND && islandCount(deleteLand(grid, y, x)) !== 1) {
      return 1;
    }
  }
  /**
   * if can't delete a single land cell to disconnect, then have to delete 2:
   *
   *  L L L    L W L
   *  L L L -> W L L
   *  L L L    L L L
   */
  return 2;
};
