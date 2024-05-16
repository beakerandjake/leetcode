/**
 * You are a hiker preparing for an upcoming hike. You are given heights, a 2D
 * array of size rows x columns, where heights[row][col] represents the height of
 * cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to
 * travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can
 * move up, down, left, or right, and you wish to find a route that requires the
 * minimum effort.
 *
 * A route's effort is the maximum absolute difference in heights between two
 * consecutive cells of the route.
 *
 * Return the minimum effort required to travel from the top-left cell to the
 * bottom-right cell.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/10/04/ex1.png]
 *
 *
 * Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
 * Output: 2
 * Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
 * This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/10/04/ex2.png]
 *
 *
 * Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
 * Output: 1
 * Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2020/10/04/ex3.png]
 *
 *
 * Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
 * Output: 0
 * Explanation: This route does not require any effort.
 *
 *
 *
 *
 * Constraints:
 *
 *  * rows == heights.length
 *  * columns == heights[i].length
 *  * 1 <= rows, columns <= 100
 *  * 1 <= heights[i][j] <= 106
 *
 *
 *
 * https://leetcode.com/problems/path-with-minimum-effort
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

// returns a new matrix of size (m x n) filled with the value.
const fill = (m, n, value) => [...Array(m)].map(() => Array(n).fill(value));

// returns the height of the matrix.
const height = (matrix) => matrix.length;

// returns the width of the matrix.
const width = (matrix) => matrix[0].length;

// creates a new 2d point.
const point = (y, x) => [y, x];

// returns the y component of the point.
const y = (p) => p[0];

// returns the x component of the point.
const x = (p) => p[1];

// adds the two points together and returns a new point.
const add = (p1, p2) => point(y(p1) + y(p2), x(p1) + x(p2));

// returns true if the point is in bounds of the matrix.
const inBounds = (matrix, p) =>
  y(p) >= 0 && y(p) < height(matrix) && x(p) >= 0 && x(p) < width(matrix);

// returns the neighbors of the point.
// eslint-disable-next-line func-style
function* neighbors(matrix, p) {
  const dirs = [point(-1, 0), point(1, 0), point(0, -1), point(0, 1)];
  for (const dir of dirs) {
    const neighbor = add(p, dir);
    if (inBounds(matrix, neighbor)) {
      yield neighbor;
    }
  }
}

// returns the value of element at the point of the matrix.
const get = (matrix, p) => matrix[y(p)][x(p)];

// updates the value of element at the point of the matrix.
const set = (matrix, p, value) => (matrix[y(p)][x(p)] = value);

// returns true if the two points are equal.
const equals = (p1, p2) => y(p1) === y(p2) && x(p1) === x(p2);

// returns the effort it takes to traverse the two points.
const effort = (matrix, p1, p2) => Math.abs(get(matrix, p1) - get(matrix, p2));

// returns the minimum effort needed to traverse from start to target.
const dijkstras = (matrix, start, target) => {
  const queue = MinPriorityQueue.from([[start, 0]]);
  const dist = fill(height(matrix), width(matrix), Number.MAX_SAFE_INTEGER);
  set(dist, start, 0);
  while (!queue.isEmpty()) {
    const { element: p, priority: maxEffort } = queue.dequeue();
    if (equals(p, target)) {
      return maxEffort;
    }
    for (const neighbor of neighbors(matrix, p)) {
      const newEffort = Math.max(maxEffort, effort(matrix, p, neighbor));
      if (newEffort < get(dist, neighbor)) {
        set(dist, neighbor, newEffort);
        queue.enqueue(neighbor, newEffort);
      }
    }
  }
  return -1;
};

/**
 * @param {number[][]} heights
 * @return {number}
 */
export const minimumEffortPath = (heights) =>
  dijkstras(heights, point(0, 0), point(height(heights) - 1, width(heights) - 1));
