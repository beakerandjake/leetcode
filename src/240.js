/**
 * Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.
 * This matrix has the following properties:
 *    Integers in each row are sorted in ascending from left to right.
 *    Integers in each column are sorted in ascending from top to bottom.
 */

const search = (matrix, target, left, right, top, bottom) => {
  // invalid search space
  if (left > right || top > bottom) {
    return false;
  }
  // target cannot be within bounds of matrix.
  if (target < matrix[top][left] || target > matrix[bottom][right]) {
    return false;
  }

  const rowMid = Math.floor(top + (bottom - top) / 2);
  const colMid = Math.floor(left + (right - left) / 2);
  
  const value = matrix[rowMid][colMid];
  if (value < target) {
    return (
      search(matrix, target, colMid + 1, right, rowMid + 1, bottom) ||
      search(matrix, target, left, colMid, rowMid + 1, bottom) ||
      search(matrix, target, colMid + 1, right, top, rowMid)
    );
  }

  if (value > target) {
    return (
      search(matrix, target, left, colMid - 1, top, rowMid - 1) ||
      search(matrix, target, left, colMid - 1, rowMid, bottom) ||
      search(matrix, target, colMid, right, top, rowMid - 1)
    );
  }

  return true;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
export const searchMatrix = (matrix, target) => {
  const height = matrix.length;
  const width = matrix[0].length;
  if (!height || !width) {
    return false;
  }
  return search(matrix, target, 0, width - 1, 0, height - 1);
};
