/**
 * You are given row x col grid representing a map where grid[i][j] = 1
 * represents land and grid[i][j] = 0 represents water.
 *
 * Grid cells are connected horizontally/vertically (not diagonally). The grid is
 * completely surrounded by water, and there is exactly one island (i.e., one or
 * more connected land cells).
 *
 * The island doesn't have "lakes", meaning the water inside isn't connected to the
 * water around the island. One cell is a square with side length 1. The grid is
 * rectangular, width and height don't exceed 100. Determine the perimeter of the
 * island.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2018/10/12/island.png]
 *
 *
 * Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
 * Output: 16
 * Explanation: The perimeter is the 16 yellow stripes in the image above.
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [[1]]
 * Output: 4
 *
 *
 * Example 3:
 *
 *
 * Input: grid = [[1,0]]
 * Output: 4
 *
 *
 *
 *
 * Constraints:
 *
 *  * row == grid.length
 *  * col == grid[i].length
 *  * 1 <= row, col <= 100
 *  * grid[i][j] is 0 or 1.
 *  * There is exactly one island in grid.
 *
 *
 *
 * https://leetcode.com/problems/island-perimeter
 */

const height = (matrix) => matrix.length;

const width = (matrix) => matrix[0].length;

const point = (y, x) => [y, x];

const y = (p) => p[0];

const x = (p) => p[1];

const hash = (p) => `${y(p)}_${x(p)}`;

const add = (p1, p2) => point(y(p1) + y(p2), x(p1) + x(p2));

const neighbors = (() => {
  const neighborDirections = [point(-1, 0), point(1, 0), point(0, -1), point(0, 1)];
  return (p) => neighborDirections.map((n) => add(p, n));
})();

const inBounds = (matrix, p) =>
  y(p) >= 0 && y(p) < height(matrix) && x(p) >= 0 && x(p) < width(matrix);

const isWater = (matrix, p) => matrix[y(p)][x(p)] === 0;

const perimeterSize = (matrix, p) =>
  neighbors(p).filter((n) => !inBounds(matrix, n) || isWater(matrix, n)).length;

const find = (matrix, predicateFn) => {
  for (let row = 0; row < height(matrix); row++) {
    for (let col = 0; col < width(matrix); col++) {
      if (predicateFn(point(row, col)) === true) {
        return point(row, col);
      }
    }
  }
  return null;
};

const traverseIsland = (matrix, startPoint, visitFn) => {
  const queue = [startPoint];
  const visited = new Set([hash(startPoint)]);
  while (queue.length) {
    const current = queue.shift();
    visitFn(current);
    for (const neighbor of neighbors(current)) {
      if (
        inBounds(matrix, neighbor) &&
        !isWater(matrix, neighbor) &&
        !visited.has(hash(neighbor))
      ) {
        visited.add(hash(neighbor));
        queue.push(neighbor);
      }
    }
  }
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const islandPerimeter = (grid) => {
  let result = 0;
  const start = find(grid, (t) => !isWater(grid, t));
  traverseIsland(grid, start, (p) => {
    result += perimeterSize(grid, p);
  });
  return result;
};
