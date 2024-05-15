/**
 * You are given a 0-indexed 2D matrix grid of size n x n, where (r, c) represents:
 *
 *  * A cell containing a thief if grid[r][c] = 1
 *  * An empty cell if grid[r][c] = 0
 *
 * You are initially positioned at cell (0, 0). In one move, you can move to any
 * adjacent cell in the grid, including cells containing thieves.
 *
 * The safeness factor of a path on the grid is defined as the minimum manhattan
 * distance from any cell in the path to any thief in the grid.
 *
 * Return the maximum safeness factor of all paths leading to cell (n - 1, n - 1).
 *
 * An adjacent cell of cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r
 * + 1, c) and (r - 1, c) if it exists.
 *
 * The Manhattan distance between two cells (a, b) and (x, y) is equal to |a - x| +
 * |b - y|, where |val| denotes the absolute value of val.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2023/07/02/example1.png]
 *
 *
 * Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
 * Output: 0
 * Explanation: All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2023/07/02/example2.png]
 *
 *
 * Input: grid = [[0,0,1],[0,0,0],[0,0,0]]
 * Output: 2
 * Explanation: The path depicted in the picture above has a safeness factor of 2 since:
 * - The closest cell of the path to the thief at cell (0, 2) is cell (0, 0). The distance between them is | 0 - 0 | + | 0 - 2 | = 2.
 * It can be shown that there are no other paths with a higher safeness factor.
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2023/07/02/example3.png]
 *
 *
 * Input: grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]
 * Output: 2
 * Explanation: The path depicted in the picture above has a safeness factor of 2 since:
 * - The closest cell of the path to the thief at cell (0, 3) is cell (1, 2). The distance between them is | 0 - 1 | + | 3 - 2 | = 2.
 * - The closest cell of the path to the thief at cell (3, 0) is cell (3, 2). The distance between them is | 3 - 3 | + | 0 - 2 | = 2.
 * It can be shown that there are no other paths with a higher safeness factor.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= grid.length == n <= 400
 *  * grid[i].length == n
 *  * grid[i][j] is either 0 or 1.
 *  * There is at least one thief in the grid.
 *
 *
 *
 * https://leetcode.com/problems/find-the-safest-path-in-a-grid
 */

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

const fill = (m, n, value) => [...Array(m)].map(() => Array(n).fill(value));

const height = (matrix) => matrix.length;

const width = (matrix) => matrix[0].length;

const point = (y, x) => [y, x];

const y = (p) => p[0];

const x = (p) => p[1];

const add = (p1, p2) => point(y(p1) + y(p2), x(p1) + x(p2));

const equal = (p1, p2) => y(p1) === y(p2) && x(p1) === x(p2);

// eslint-disable-next-line func-style
function* iterate(matrix) {
  for (let row = 0; row < height(matrix); row++) {
    for (let col = 0; col < width(matrix); col++) {
      yield point(row, col);
    }
  }
}

const inBounds = (matrix, p) =>
  y(p) >= 0 && y(p) < height(matrix) && x(p) >= 0 && x(p) < width(matrix);

const NEIGHBOR_DIRECTIONS = [point(-1, 0), point(1, 0), point(0, -1), point(0, 1)];

// eslint-disable-next-line func-style
function* neighbors(matrix, p) {
  for (const d of NEIGHBOR_DIRECTIONS) {
    const neighbor = add(p, d);
    if (inBounds(matrix, neighbor)) {
      yield neighbor;
    }
  }
}

const set = (matrix, p, value) => (matrix[y(p)][x(p)] = value);

const get = (matrix, p) => matrix[y(p)][x(p)];

const isThief = (value) => value === 1;

const safetyMap = (matrix) => {
  const result = fill(height(matrix), width(matrix), Number.MAX_SAFE_INTEGER);
  const queue = [];
  for (const p of iterate(matrix)) {
    if (isThief(get(matrix, p))) {
      set(result, p, 0);
      queue.push(p);
    }
  }
  while (queue.length) {
    const p = queue.shift();
    for (const neighbor of neighbors(matrix, p)) {
      if (get(result, neighbor) > get(result, p) + 1) {
        set(result, neighbor, get(result, p) + 1);
        queue.push(neighbor);
      }
    }
  }
  return result;
};

const dijkstras = (matrix, pStart, pTarget) => {
  const visited = fill(height(matrix), width(matrix), false);
  const queue = new MaxPriorityQueue();
  queue.enqueue(pStart, get(matrix, pStart));
  set(visited, pStart, true);
  while (!queue.isEmpty()) {
    const { element: p, priority } = queue.dequeue();
    if (equal(p, pTarget)) {
      return priority;
    }
    for (const neighbor of neighbors(matrix, p)) {
      if (!get(visited, neighbor)) {
        set(visited, neighbor, true);
        queue.enqueue(neighbor, Math.min(priority, get(matrix, neighbor)));
      }
    }
  }
  return -1;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const maximumSafenessFactor = (grid) =>
  dijkstras(safetyMap(grid), point(0, 0), point(height(grid) - 1, width(grid) - 1));
