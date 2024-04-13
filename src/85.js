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

const largestRect = (heights) => {
  let maxArea = 0;
  let minHeight = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < heights.length; i++) {
    const w = i + 1;
    minHeight = Math.min(minHeight, heights[i]);
    if (minHeight === 0) {
      break;
    }
    maxArea = Math.max(maxArea, w * minHeight);
  }

  return maxArea;
};

/**
 * @param {character[][]} matrix
 * @return {number}
 */
export const maximalRectangle = (matrix) => {
  let max = 0;
  const yLookup = consecutiveY(matrix);
  const xLookup = consecutiveX(matrix);
  for (let y = 0; y < height(matrix); y++) {
    for (let x = 0; x < width(matrix); x++) {
      if (matrix[y][x] !== '1') {
        continue;
      }
      max = Math.max(
        max,
        yLookup[y][x],
        xLookup[y][x],
        largestRect(yLookup[y].slice(x, x + xLookup[y][x])),
      );
    }
  }

  return max;
};
