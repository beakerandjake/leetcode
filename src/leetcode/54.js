/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg]
 *
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg]
 *
 *
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == matrix.length
 *  * n == matrix[i].length
 *  * 1 <= m, n <= 10
 *  * -100 <= matrix[i][j] <= 100
 *
 *
 *
 * https://leetcode.com/problems/spiral-matrix
 */

const outputRow = (matrix, row, colStart, colEnd) => {
  const output = [];
  for (let col = colStart; col <= colEnd; col++) {
    output.push(matrix[row][col]);
  }
  return output;
};

const outputRowReverse = (matrix, row, colStart, colEnd) => {
  const output = [];
  for (let col = colStart; col >= colEnd; col--) {
    output.push(matrix[row][col]);
  }
  return output;
};

const outputCol = (matrix, col, rowStart, rowEnd) => {
  const output = [];
  for (let row = rowStart; row <= rowEnd; row++) {
    output.push(matrix[row][col]);
  }
  return output;
};

const outputColReverse = (matrix, col, rowStart, rowEnd) => {
  const output = [];
  for (let row = rowStart; row >= rowEnd; row--) {
    output.push(matrix[row][col]);
  }
  return output;
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export const spiralOrder = (matrix) => {
  const output = [];
  const height = matrix.length;
  const width = matrix[0].length;
  const elementCount = width * height;
  let left = 0;
  let right = width - 1;
  let top = 0;
  let bottom = height - 1;

  while (output.length !== elementCount) {
    output.push(...outputRow(matrix, top, left, right));
    top++;
    if (output.length >= elementCount) {
      break;
    }
    output.push(...outputCol(matrix, right, top, bottom));
    right--;
    if (output.length >= elementCount) {
      break;
    }
    output.push(...outputRowReverse(matrix, bottom, right, left));
    bottom--;
    if (output.length >= elementCount) {
      break;
    }
    output.push(...outputColReverse(matrix, left, bottom, top));
    left++;
  }

  return output;
};
