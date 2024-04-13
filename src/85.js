/**
 * Given a rows x cols binary matrix filled with 0's and 1's, find the largest
 * rectangle containing only 1's and return its area.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg]
 *
 *
 * Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * Output: 6
 * Explanation: The maximal rectangle is shown in the above picture.
 *
 *
 * Example 2:
 *
 *
 * Input: matrix = [["0"]]
 * Output: 0
 *
 *
 * Example 3:
 *
 *
 * Input: matrix = [["1"]]
 * Output: 1
 *
 *
 *
 *
 * Constraints:
 *
 *  * rows == matrix.length
 *  * cols == matrix[i].length
 *  * 1 <= row, cols <= 200
 *  * matrix[i][j] is '0' or '1'.
 *
 *
 *
 * https://leetcode.com/problems/maximal-rectangle
 */

const height = (matrix) => matrix.length;

const width = (matrix) => matrix[0].length;

const empty = (m, n) => [...Array(m)].map(() => Array(n).fill(0));

const consecutiveY = (matrix) => {
  const toReturn = empty(height(matrix), width(matrix));
  const maxY = height(matrix) - 1;
  for (let y = maxY; y >= 0; y--) {
    for (let x = 0; x < width(matrix); x++) {
      if (matrix[y][x] === '1') {
        toReturn[y][x] = y < maxY ? toReturn[y + 1][x] + 1 : 1;
      }
    }
  }
  return toReturn;
};

const consecutiveX = (matrix) => {
  const toReturn = empty(height(matrix), width(matrix));
  const maxX = width(matrix) - 1;
  for (let y = 0; y < height(matrix); y++) {
    for (let x = maxX; x >= 0; x--) {
      if (matrix[y][x] === '1') {
        toReturn[y][x] = x < maxX ? toReturn[y][x + 1] + 1 : 1;
      }
    }
  }
  return toReturn;
};

/**
 * @param {character[][]} matrix
 * @return {number}
 */
export const maximalRectangle = (matrix) => {
  let maxArea = 0;
  const yLookup = consecutiveY(matrix);
  const xLookup = consecutiveX(matrix);
  for (let row = 0; row < height(matrix); row++) {
    for (let col = 0; col < width(matrix); col++) {
      if (matrix[row][col] !== '1') {
        continue;
      }
      let area = Math.max(xLookup[row][col], yLookup[row][col]);
      let minHeight = yLookup[row][col];
      for (let x = 0; x < xLookup[row][col]; x++) {
        if (yLookup[row][col + x] === 0) {
          break;
        }
        minHeight = Math.min(minHeight, yLookup[row][col + x]);
        area = Math.max(area, (x + 1) * minHeight);
      }
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};
