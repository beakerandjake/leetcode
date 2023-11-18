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

const simple = (matrix) => {
  const output = [];
  const height = matrix.length;
  const width = matrix[0].length;
  const elementCount = width * height;
  let left = 0;
  let right = width - 1;
  let top = 0;
  let bottom = height - 1;

  while (output.length !== elementCount) {
    // left to right (top row)
    for (let col = left; col <= right; col++) {
      output.push(matrix[top][col]);
    }
    top++;

    if (output.length >= elementCount) {
      break;
    }

    // top to bottom (right col)
    for (let row = top; row <= bottom; row++) {
      output.push(matrix[row][right]);
    }
    right--;

    if (output.length >= elementCount) {
      break;
    }

    // left to right (bottom row)
    for (let col = right; col >= left; col--) {
      output.push(matrix[bottom][col]);
    }
    bottom--;

    if (output.length >= elementCount) {
      break;
    }

    // bottom to top (left col)
    for (let row = bottom; row >= top; row--) {
      output.push(matrix[row][left]);
    }
    left++;
  }

  return output;
};

const stateMachine = (() => {
  /**
   * Travels right on the top row.
   */
  const travelRight = (bounds, visitFn) => {
    for (let col = bounds.left; col <= bounds.right; col++) {
      visitFn(bounds.top, col);
    }
    return { ...bounds, top: bounds.top + 1 };
  };

  /**
   * Travels down on the right col
   */
  const travelDown = (bounds, visitFn) => {
    for (let row = bounds.top; row <= bounds.bottom; row++) {
      visitFn(row, bounds.right);
    }
    return { ...bounds, right: bounds.right - 1 };
  };

  /**
   * Travels left on the bottom row.
   */
  const travelLeft = (bounds, visitFn) => {
    for (let col = bounds.right; col >= bounds.left; col--) {
      visitFn(bounds.bottom, col);
    }
    return { ...bounds, bottom: bounds.bottom - 1 };
  };

  /**
   * Travel up on the left row.
   */
  const travelUp = (bounds, visitFn) => {
    for (let row = bounds.bottom; row >= bounds.top; row--) {
      visitFn(row, bounds.left);
    }
    return { ...bounds, left: bounds.left + 1 };
  };

  const transitions = new Map([
    [travelRight, travelDown],
    [travelDown, travelLeft],
    [travelLeft, travelUp],
    [travelUp, travelRight],
  ]);

  return (matrix) => {
    const output = [];
    const height = matrix.length;
    const width = matrix[0].length;
    const items = width * height;
    let currentState = travelRight;
    let bounds = {
      left: 0,
      right: width - 1,
      top: 0,
      bottom: height - 1,
    };
    const visit = (row, col) => {
      output.push(matrix[row][col]);
    };
    while (output.length < items) {
      bounds = currentState(bounds, visit);
      currentState = transitions.get(currentState);
    }
    return output;
  };
})();

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export const spiralOrder = stateMachine;
