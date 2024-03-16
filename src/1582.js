/**
 * Given an m x n binary matrix mat, return the number of special positions in mat.
 *
 * A position (i, j) is called special if mat[i][j] == 1 and all other elements in
 * row i and column j are 0 (rows and columns are 0-indexed).
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/12/23/special1.jpg]
 *
 *
 * Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
 * Output: 1
 * Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/12/24/special-grid.jpg]
 *
 *
 * Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
 * Output: 3
 * Explanation: (0, 0), (1, 1) and (2, 2) are special positions.
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == mat.length
 *  * n == mat[i].length
 *  * 1 <= m, n <= 100
 *  * mat[i][j] is either 0 or 1.
 *
 *
 *
 * https://leetcode.com/problems/special-positions-in-a-binary-matrix
 */

// returns the [m,n] dimensions of the matrix.
const shape = (matrix) => [matrix.length, matrix[0].length];

// invokes the visitFn for each element of the matrix.
const forEach = (matrix, visitFn) => {
  const [height, width] = shape(matrix);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      visitFn(y, x);
    }
  }
};

// counts the number of elements in the matrix which match the predicate.
const countMatching = (matrix, predicate) => {
  let count = 0;
  forEach(matrix, (y, x) => {
    if (predicate(y, x, matrix)) {
      count++;
    }
  });
  return count;
};

const bruteForce = (() => {
  // returns an array containing all the values in the row.
  const row = (matrix, y) => matrix[y];

  // reutrns an array containing all the values in the column.
  const col = (matrix, x) => matrix.map((r) => r[x]);

  // returns the sum of all numbers in an array.
  const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

  return (matrix) =>
    countMatching(
      matrix,
      (y, x) =>
        matrix[y][x] === 1 && sum(row(matrix, y)) === 1 && sum(col(matrix, x)) === 1
    );
})();

const preComputed = (matrix) => {
  const [height, width] = shape(matrix);
  const rowLookup = Array(height).fill(0);
  const colLookup = Array(width).fill(0);
  forEach(matrix, (y, x) => {
    if (matrix[y][x] === 1) {
      rowLookup[y]++;
      colLookup[x]++;
    }
  });

  return countMatching(
    matrix,
    (y, x) => matrix[y][x] === 1 && rowLookup[y] === 1 && colLookup[x] === 1
  );
};

/**
 * @param {number[][]} mat
 * @return {number}
 */
export const numSpecial = preComputed;
