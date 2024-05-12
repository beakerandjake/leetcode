/**
 * You are given an n x n integer matrix grid.
 *
 * Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:
 *
 *  * maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid
 *    centered around row i + 1 and column j + 1.
 *
 * In other words, we want to find the largest value in every contiguous 3 x 3
 * matrix in grid.
 *
 * Return the generated matrix.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2022/06/21/ex1.png]
 *
 *
 * Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
 * Output: [[9,9],[8,6]]
 * Explanation: The diagram above shows the original matrix and the generated matrix.
 * Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2022/07/02/ex2new2.png]
 *
 *
 * Input: grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
 * Output: [[2,2,2],[2,2,2],[2,2,2]]
 * Explanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.
 *
 *
 *
 *
 * Constraints:
 *
 *  * n == grid.length == grid[i].length
 *  * 3 <= n <= 100
 *  * 1 <= grid[i][j] <= 100
 *
 *
 *
 * https://leetcode.com/problems/largest-local-values-in-a-matrix
 */

// returns a new 2d array of size (m x n)
const empty = (m, n) => [...Array(m)].map(() => Array(n).fill(0));

// returns the height of the matrix.
const height = (matrix) => matrix.length;

// returns the width of the matrix.
const width = (matrix) => matrix[0].length;

// eslint-disable-next-line func-style
function* kernelOrigins(matrix, kSize) {
  for (let y = 0; y <= height(matrix) - kSize; y++) {
    for (let x = 0; x <= width(matrix) - kSize; x++) {
      yield [y, x];
    }
  }
}

// returns a kernel of size which originates at the origin <y,x>
const kernel = (matrix, y, x, size) =>
  matrix.slice(y, y + size).map((row) => row.slice(x, x + size));

// returns the max value of the matrix.
const max = (matrix) => Math.max(...matrix.flat());

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
export const largestLocal = (grid) =>
  [...kernelOrigins(grid, 3)].reduce(
    (acc, [y, x]) => {
      acc[y][x] = max(kernel(grid, y, x, 3));
      return acc;
    },
    empty(height(grid) - 2, width(grid) - 2),
  );
