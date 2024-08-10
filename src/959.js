/**
 * An n x n grid is composed of 1 x 1 squares where each 1 x 1 square consists of a
 * '/', '\', or blank space ' '. These characters divide the square into contiguous
 * regions.
 *
 * Given the grid grid represented as a string array, return the number of regions.
 *
 * Note that backslash characters are escaped, so a '\' is represented as '\\'.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2018/12/15/1.png]
 *
 *
 * Input: grid = [" /","/ "]
 * Output: 2
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2018/12/15/2.png]
 *
 *
 * Input: grid = [" /","  "]
 * Output: 1
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2018/12/15/4.png]
 *
 *
 * Input: grid = ["/\\","\\/"]
 * Output: 5
 * Explanation: Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.
 *
 *
 *
 *
 * Constraints:
 *
 *  * n == grid.length == grid[i].length
 *  * 1 <= n <= 30
 *  * grid[i][j] is either '/', '\', or ' '.
 *
 *
 *
 * https://leetcode.com/problems/regions-cut-by-slashes
 */

// converts the input to a matrix of size m x n
const toMatrix = (() => {
  const expansionMap = new Map([
    [
      ' ',
      [
        ['.', '.', '.'],
        ['.', '.', '.'],
        ['.', '.', '.'],
      ],
    ],
    [
      '/',
      [
        ['.', '.', '/'],
        ['.', '/', '.'],
        ['/', '.', '.'],
      ],
    ],
    [
      '\\',
      [
        ['\\', '.', '.'],
        ['.', '\\', '.'],
        ['.', '.', '\\'],
      ],
    ],
  ]);
  return (input) => {
    const matrix = [...Array(input.length * 3)].map(() => []);
    for (let y = 0; y < input.length; y++) {
      for (let x = 0; x < input[y].length; x++) {
        const expansion = expansionMap.get(input[y][x]);
        for (let i = 0; i < expansion.length; i++) {
          matrix[y * 3 + i].push(...expansion[i]);
        }
      }
    }
    return matrix;
  };
})();

// returns a new empty array of size m x n filled with value
const empty = (m, n, value) => [...Array(m)].map(() => Array(n).fill(value));

// returns the height of the matrix.
const height = (matrix) => matrix.length;

// returns the width of the matrix.
const width = (matrix) => matrix[0].length;

// iterates over each cell in the matrix top to bottom, left to right.
const iterate = function* (matrix) {
  for (let y = 0; y < height(matrix); y++) {
    for (let x = 0; x < width(matrix); x++) {
      yield [matrix[y][x], y, x];
    }
  }
};

// returns true if the cell represents empty space.
const isEmptySpace = (cell) => cell === '.';

// iterates each cardinal neighbor of the point which is in bounds of the matrix.
const cardinalNeighbors = (() => {
  // cardinal directions (l, r, d, u)
  const directions = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];

  // returns true if the value is within the bounds of the matrix.
  const inBounds = (matrix, y, x) =>
    y >= 0 && y < height(matrix) && x >= 0 && x < width(matrix);

  return function* (matrix, y, x) {
    for (const [dY, dX] of directions) {
      const nY = y + dY;
      const nX = x + dX;
      if (inBounds(matrix, nY, nX)) {
        yield [nY, nX];
      }
    }
  };
})();

const bfs = (matrix, startY, startX, visited) => {
  const queue = [[startY, startX]];
  while (queue.length) {
    const [y, x] = queue.shift();
    for (const [nY, nX] of cardinalNeighbors(matrix, y, x)) {
      if (!visited[nY][nX] && isEmptySpace(matrix[nY][nX])) {
        visited[nY][nX] = true;
        queue.push([nY, nX]);
      }
    }
  }
};

/**
 * @param {string[]} grid
 * @return {number}
 */
export const regionsBySlashes = (grid) => {
  let result = 0;
  const matrix = toMatrix(grid);
  const visited = empty(height(matrix), width(matrix), false);
  // flood fill from each empty space
  for (const [cell, y, x] of iterate(matrix)) {
    if (!visited[y][x] && isEmptySpace(cell)) {
      bfs(matrix, y, x, visited);
      result++;
    }
  }
  return result;
};
