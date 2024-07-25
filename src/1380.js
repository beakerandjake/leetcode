/**
 * Given an m x n matrix of distinct numbers, return all lucky numbers in the
 * matrix in any order.
 *
 * A lucky number is an element of the matrix such that it is the minimum element
 * in its row and maximum in its column.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
 * Output: [15]
 * Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
 *
 *
 * Example 2:
 *
 *
 * Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
 * Output: [12]
 * Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
 *
 *
 * Example 3:
 *
 *
 * Input: matrix = [[7,8],[1,2]]
 * Output: [7]
 * Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == mat.length
 *  * n == mat[i].length
 *  * 1 <= n, m <= 50
 *  * 1 <= matrix[i][j] <= 105.
 *  * All elements in the matrix are distinct.
 *
 *
 *
 * https://leetcode.com/problems/lucky-numbers-in-a-matrix
 */

// returns the height of the matrix.
const height = (matrix) => matrix.length;

// returns the width of the matrix
const width = (matrix) => matrix[0].length;

// iterates the rows of the matrix.
// eslint-disable-next-line func-style
function* rows(matrix) {
  for (let y = 0; y < height(matrix); y++) {
    yield matrix[y];
  }
}

// iterates the cols of the matrix.
// eslint-disable-next-line func-style
function* cols(matrix) {
  for (let x = 0; x < width(matrix); x++) {
    yield matrix.map((r) => r[x]);
  }
}

// iterates every value in the matrix.
// eslint-disable-next-line func-style
function* iterate(matrix) {
  for (let y = 0; y < height(matrix); y++) {
    for (let x = 0; x < width(matrix); x++) {
      yield [matrix[y][x], y, x];
    }
  }
}

// returns the largest number in the array.
const max = (arr) => Math.max(...arr);

// returns the smallest number in the array.
const min = (arr) => Math.min(...arr);

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export const luckyNumbers = (matrix) => {
  const rowMins = [...rows(matrix)].map(min);
  const colMax = [...cols(matrix)].map(max);
  return [...iterate(matrix)]
    .filter(([value, y, x]) => rowMins[y] === value && colMax[x] === value)
    .map(([value]) => value);
};
