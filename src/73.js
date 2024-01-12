/**
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and
 * column to 0's.
 *
 * You must do it in place [https://en.wikipedia.org/wiki/In-place_algorithm].
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg]
 *
 *
 * Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
 * Output: [[1,0,1],[0,0,0],[1,0,1]]
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg]
 *
 *
 * Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == matrix.length
 *  * n == matrix[0].length
 *  * 1 <= m, n <= 200
 *  * -231 <= matrix[i][j] <= 231 - 1
 *
 *
 *
 * Follow up:
 *
 *  * A straightforward solution using O(mn) space is probably a bad idea.
 *  * A simple improvement uses O(m + n) space, but still not the best solution.
 *  * Could you devise a constant space solution?
 *
 *
 *
 * https://leetcode.com/problems/set-matrix-zeroes
 */

// const toStr = (matrix) => matrix.map((row) => `[${row.join(', ')}]`).join('\n');

const shape = (matrix) => ({ height: matrix.length, width: matrix[0].length });

const usingSpace = (matrix) => {
  const { height, width } = shape(matrix);
  const zeroRows = Array(height).fill(false);
  const zeroCols = Array(width).fill(false);

  const zeroOutRow = (row) => {
    for (let x = 0; x < width; x++) {
      matrix[row][x] = 0;
    }
  };

  const zeroOutCol = (col) => {
    for (let y = 0; y < height; y++) {
      matrix[y][col] = 0;
    }
  };

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (matrix[y][x] === 0) {
        zeroRows[y] = true;
        zeroCols[x] = true;
      }
    }
  }

  zeroRows.forEach((zero, row) => {
    if (zero) {
      zeroOutRow(row);
    }
  });

  zeroCols.forEach((zero, col) => {
    if (zero) {
      zeroOutCol(col);
    }
  });
};

const noSpace = (matrix) => {
  const { width, height } = shape(matrix);

  // store if first row / col had a starting zero.
  const firstRowZero = matrix[0].some((value) => value === 0);
  const firstColZero = matrix.some((row) => row[0] === 0);

  // use first row/col to mark zeros.
  for (let y = 1; y < height; y++) {
    for (let x = 1; x < width; x++) {
      if (matrix[y][x] === 0) {
        matrix[y][0] = 0;
        matrix[0][x] = 0;
      }
    }
  }

  // zero out inner rows.
  for (let row = 1; row < height; row++) {
    if (matrix[row][0] === 0) {
      for (let col = 1; col < width; col++) {
        matrix[row][col] = 0;
      }
    }
  }

  // zero out inner cols
  for (let col = 1; col < width; col++) {
    if (matrix[0][col] === 0) {
      for (let row = 1; row < height; row++) {
        matrix[row][col] = 0;
      }
    }
  }

  if (firstColZero) {
    for (let row = 0; row < height; row++) {
      matrix[row][0] = 0;
    }
  }

  if (firstRowZero) {
    for (let col = 0; col < width; col++) {
      matrix[0][col] = 0;
    }
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export const setZeroes = usingSpace;
