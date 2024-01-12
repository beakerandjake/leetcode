/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 */

const swap = (matrix, y1, x1, y2, x2) => {
  const temp = matrix[y1][x1];
  matrix[y1][x1] = matrix[y2][x2];
  matrix[y2][x2] = temp;
};

const transpose = (matrix) => {
  let diagonal = 1;
  while (diagonal < matrix.length) {
    let current = diagonal - 1;
    while (current >= 0) {
      swap(matrix, diagonal, current, current, diagonal);
      current--;
    }
    diagonal++;
  }
};

const flip = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    let left = 0;
    let right = matrix.length - 1;
    while (left < right) {
      swap(matrix, row, left++, row, right--);
    }
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export const rotate = (matrix) => {
  transpose(matrix);
  flip(matrix);
};
