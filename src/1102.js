/**
 * Given an m x n integer matrix grid, return the maximum score of a path starting
 * at (0, 0) and ending at (m - 1, n - 1) moving in the 4 cardinal directions.
 *
 * The score of a path is the minimum value in that path.
 *
 *  * For example, the score of the path 8 → 4 → 5 → 9 is 4.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/08/05/maxgrid1.jpg]
 *
 *
 * Input: grid = [[5,4,5],[1,2,6],[7,4,6]]
 * Output: 4
 * Explanation: The path with the maximum score is highlighted in yellow.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/08/05/maxgrid2.jpg]
 *
 *
 * Input: grid = [[2,2,1,2,2,2],[1,2,2,2,1,2]]
 * Output: 2
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2021/08/05/maxgrid3.jpg]
 *
 *
 * Input: grid = [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]
 * Output: 3
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == grid.length
 *  * n == grid[i].length
 *  * 1 <= m, n <= 100
 *  * 0 <= grid[i][j] <= 109
 *
 *
 *
 * https://leetcode.com/problems/path-with-maximum-minimum-value
 */

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

const fill = (m, n, value) => [...Array(m)].map(() => Array(n).fill(value));

const height = (matrix) => matrix.length;

const width = (matrix) => matrix[0].length;

const point = (y, x) => [y, x];

const x = (p) => p[1];

const y = (p) => p[0];

const add = (p1, p2) => point(y(p1) + y(p2), x(p1) + x(p2));

const inBounds = (matrix, p) =>
  y(p) >= 0 && y(p) < height(matrix) && x(p) >= 0 && x(p) < width(matrix);

// eslint-disable-next-line func-style
function* neighbors(matrix, p) {
  const dirs = [point(-1, 0), point(1, 0), point(0, -1), point(0, 1)];
  for (const d of dirs) {
    const neighbor = add(p, d);
    if (inBounds(matrix, neighbor)) {
      yield neighbor;
    }
  }
}

const get = (matrix, p) => matrix[y(p)][x(p)];

const set = (matrix, p, value) => (matrix[y(p)][x(p)] = value);

const equals = (p1, p2) => y(p1) === y(p2) && x(p1) === x(p2);

const dijkstra = (matrix, pStart, pTarget) => {
  const visited = fill(height(matrix), width(matrix), false);
  const queue = new MaxPriorityQueue();
  queue.enqueue(pStart, get(matrix, pStart));
  set(visited, pStart, true);
  while (!queue.isEmpty()) {
    const { element: p, priority: maxScore } = queue.dequeue();
    if (equals(p, pTarget)) {
      return maxScore;
    }
    if (!get(visited, p)) {
      set(visited, p, true);
      for (const neighbor of neighbors(matrix, p)) {
        queue.enqueue(neighbor, Math.min(maxScore, get(matrix, neighbor)));
      }
    }
  }
  return -1;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const maximumMinimumPath = (grid) =>
  dijkstra(grid, point(0, 0), point(height(grid) - 1, width(grid) - 1));
