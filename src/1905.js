/**
 * You are given two m x n binary matrices grid1 and grid2 containing only 0's
 * (representing water) and 1's (representing land). An island is a group of 1's
 * connected 4-directionally (horizontal or vertical). Any cells outside of the
 * grid are considered water cells.
 *
 * An island in grid2 is considered a sub-island if there is an island in grid1
 * that contains all the cells that make up this island in grid2.
 *
 * Return the number of islands in grid2 that are considered sub-islands.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/06/10/test1.png]
 *
 *
 * Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
 * Output: 3
 * Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
 * The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/06/03/testcasex2.png]
 *
 *
 * Input: grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
 * Output: 2
 * Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
 * The 1s colored red in grid2 are those considered to be part of a sub-island. There are two sub-islands.
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == grid1.length == grid2.length
 *  * n == grid1[i].length == grid2[i].length
 *  * 1 <= m, n <= 500
 *  * grid1[i][j] and grid2[i][j] are either 0 or 1.
 *
 *
 *
 * https://leetcode.com/problems/count-sub-islands
 */

// returns a new matrix of size (m x n) filled with the value.
const fill = (m, n, value) => [...Array(m)].map(() => Array(n).fill(value));

// returns a new vector2
const vector2 = (y, x) => [y, x];

// returns the y component of the vector2
const y = (v) => v[0];

// returns the x component of the vector2
const x = (v) => v[1];

// adds the two vectors together and returns a new vector2
const add = (v1, v2) => vector2(y(v1) + y(v2), x(v1) + x(v2));

// returns the height of the matrix
const height = (m) => m.length;

// returns the width of the matrix
const width = (m) => m[0].length;

// mutates the matrix by setting the cell a p to the specified value
const set = (m, p, value) => (m[y(p)][x(p)] = value);

// returns the value of cell at point p of the matrix
const get = (m, p) => m[y(p)][x(p)];

// iterates each cell of the matrix
const iterate = function* (m) {
  for (let row = 0; row < height(m); row++) {
    for (let col = 0; col < width(m); col++) {
      yield vector2(row, col);
    }
  }
};

// iterates each in bounds von neumann neighbor of the given point of the matrix.
const neighbors = (() => {
  // vectors which point in all valid neighbor directions: r,d,l,u
  const directions = [vector2(0, 1), vector2(1, 0), vector2(0, -1), vector2(-1, 0)];

  // returns true if the point is within the bounds of the matrix
  const inBounds = (m, p) =>
    y(p) >= 0 && y(p) < height(m) && x(p) >= 0 && x(p) < width(m);

  return function* (m, p) {
    // yield each in bound neighbor of the point
    for (const n of directions.map((d) => add(d, p))) {
      if (inBounds(m, n)) {
        yield n;
      }
    }
  };
})();

// returns true if the cell at point p is land.
const isLand = (m, p) => get(m, p) === 1;

// performs a bfs from the starting point, traversing each neighboring cell which satisfies the explorePredicateFn
// mutates the visited matrix!
const bfs = (m, start, visited, explorePredicateFn) => {
  const result = [];
  const queue = [start];
  set(visited, start, true);
  while (queue.length) {
    const current = queue.shift();
    result.push(current);
    for (const n of neighbors(m, current)) {
      if (!get(visited, n) && explorePredicateFn(n)) {
        queue.push(n);
        set(visited, n, true);
      }
    }
  }
  return result;
};

// yields each island of the matrix.
const islands = function* (m) {
  const visited = fill(height(m), width(m), false);
  const landPredicate = (p) => isLand(m, p);
  for (const p of iterate(m)) {
    if (!get(visited, p) && landPredicate(p)) {
      yield bfs(m, p, visited, landPredicate);
    }
  }
};

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
export const countSubIslands = (grid1, grid2) =>
  [...islands(grid2)].filter((i) => i.every((p) => isLand(grid1, p))).length;
