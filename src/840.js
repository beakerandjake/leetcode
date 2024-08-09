/**
 * A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9
 * such that each row, column, and both diagonals all have the same sum.
 *
 * Given a row x col grid of integers, how many 3 x 3 contiguous magic square
 * subgrids are there?
 *
 * Note: while a magic square can only contain numbers from 1 to 9, grid may
 * contain numbers up to 15.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/09/11/magic_main.jpg]
 *
 *
 * Input: grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]
 * Output: 1
 * Explanation:
 * The following subgrid is a 3 x 3 magic square:
 * [https://assets.leetcode.com/uploads/2020/09/11/magic_valid.jpg]
 * while this one is not:
 * [https://assets.leetcode.com/uploads/2020/09/11/magic_invalid.jpg]
 * In total, there is only one magic square inside the given grid.
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [[8]]
 * Output: 0
 *
 *
 *
 *
 * Constraints:
 *
 *  * row == grid.length
 *  * col == grid[i].length
 *  * 1 <= row, col <= 10
 *  * 0 <= grid[i][j] <= 15
 *
 *
 *
 * https://leetcode.com/problems/magic-squares-in-grid
 */

// returns the height of the matrix.
const height = (matrix) => matrix.length;

// returns the width of the matrix.
const width = (matrix) => matrix[0].length;

// iterates each n x n sized square of the matrix
const squares = function* (matrix, n) {
  if (height(matrix) < n || width(matrix) < n) {
    return;
  }
  const maxY = height(matrix) - n;
  const maxX = width(matrix) - n;
  for (let y = 0; y <= maxY; y++) {
    for (let x = 0; x <= maxX; x++) {
      yield matrix.slice(y, y + n).map((row) => row.slice(x, x + n));
    }
  }
};

// iterates each row of the matrix.
const rows = function* (grid) {
  for (let y = 0; y < height(grid); y++) {
    yield grid[y];
  }
};

// iterates each col of the matrix.
const cols = function* (grid) {
  for (let x = 0; x < width(grid); x++) {
    yield grid.map((row) => row[x]);
  }
};

// iterates the two diagonals of the matrix.
const diagonals = function* (grid) {
  // top left to bottom right
  yield grid.map((row, y) => row[y]);
  // top right to bottom left
  yield grid.map((row, y) => row[grid.length - y - 1]);
};

// returns the sum of the numbers in the array
const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

// returns true if the grid is a magic square.
const isMagicSquare = (grid) => {
  const unique = new Set(grid.flat());
  // must have distinct digits 1-9
  if (unique.size !== 9 || [1, 2, 3, 4, 5, 6, 7, 8, 9].some((x) => !unique.has(x))) {
    return false;
  }
  // the sum of each row / col / diagonal must be equal
  const sums = [...rows(grid), ...cols(grid), ...diagonals(grid)].flatMap(sum);
  return new Set(sums).size === 1;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const numMagicSquaresInside = (grid) => {
  let result = 0;
  for (const square of squares(grid, 3)) {
    if (isMagicSquare(square)) {
      result++;
    }
  }
  return result;
};
