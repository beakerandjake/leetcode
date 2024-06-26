/**
 * You are given an m x n binary matrix grid.
 *
 * A move consists of choosing any row or column and toggling each value in that
 * row or column (i.e., changing all 0's to 1's, and all 1's to 0's).
 *
 * Every row of the matrix is interpreted as a binary number, and the score of the
 * matrix is the sum of these numbers.
 *
 * Return the highest possible score after making any number of moves (including
 * zero moves).
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/07/23/lc-toogle1.jpg]
 *
 *
 * Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
 * Output: 39
 * Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [[0]]
 * Output: 1
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == grid.length
 *  * n == grid[i].length
 *  * 1 <= m, n <= 20
 *  * grid[i][j] is either 0 or 1.
 *
 *
 *
 * https://leetcode.com/problems/score-after-flipping-matrix
 */

const height = (matrix) => matrix.length;

const width = (matrix) => matrix[0].length;

const getCol = (matrix, index) => matrix.map((row) => row[index]);

const flipped = (arr) => arr.map((x) => (x === 1 ? 0 : 1));

const copy = (matrix) => matrix.map((row) => [...row]);

const count = (arr, elem) => arr.filter((x) => x === elem).length;

const setCol = (matrix, index, arr) => {
  const result = copy(matrix);
  result.forEach((row, y) => (row[index] = arr[y]));
  return result;
};

const value = (arr) =>
  arr.reduce((acc, x, i) => acc + (x ? 2 ** (arr.length - i - 1) : 0), 0);

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const matrixScore = (grid) => {
  let result = copy(grid);
  // flip any rows which have their msb set to zero.
  result = result.map((row) => (row[0] === 0 ? flipped(row) : row));
  // flip any cols which have more zeros than ones.
  for (let x = 0; x < width(result); x++) {
    const col = getCol(result, x);
    if (count(col, 0) > count(col, 1)) {
      result = setCol(result, x, flipped(col));
    }
  }
  // sum all the rows. 
  return result.reduce((acc, row) => acc + value(row), 0);
};
