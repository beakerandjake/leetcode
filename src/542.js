/**
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each
 * cell.
 *
 * The distance between two adjacent cells is 1.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/04/24/01-1-grid.jpg]
 *
 *
 * Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
 * Output: [[0,0,0],[0,1,0],[0,0,0]]
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/04/24/01-2-grid.jpg]
 *
 *
 * Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
 * Output: [[0,0,0],[0,1,0],[1,2,1]]
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == mat.length
 *  * n == mat[i].length
 *  * 1 <= m, n <= 104
 *  * 1 <= m * n <= 104
 *  * mat[i][j] is either 0 or 1.
 *  * There is at least one 0 in mat.
 *
 *
 *
 * https://leetcode.com/problems/01-matrix
 */

const getShape = (matrix) => ({ height: matrix.length, width: matrix[0].length });

const empty = ({ width, height }) => [...Array(height)].map(() => Array(width).fill(0));

const outOfBounds = (y, x, { width, height }) =>
  y < 0 || y >= height || x < 0 || x >= width;

const neighbors = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
export const updateMatrix = (matrix) => {
  const shape = getShape(matrix);
  const distances = empty(shape);
  const queue = [];

  // scan the matrix, find the zeros and initialize the distances.
  for (let y = 0; y < shape.height; y++) {
    for (let x = 0; x < shape.width; x++) {
      if (matrix[y][x] === 0) {
        queue.push({ y, x, distance: 0 });
      } else {
        distances[y][x] = Number.MAX_SAFE_INTEGER;
      }
    }
  }

  // bfs to every 1 on the board, updating the distance along the way.
  while (queue.length) {
    const { x, y, distance } = queue.shift();
    if (matrix[y][x] === 1 && distances[y][x] !== Number.MAX_SAFE_INTEGER) {
      continue;
    }
    distances[y][x] = distance;
    for (const [dy, dx] of neighbors) {
      const ny = y + dy;
      const nx = x + dx;
      if (!outOfBounds(ny, nx, shape) && matrix[ny][nx] === 1) {
        queue.push({ x: nx, y: ny, distance: distance + 1 });
      }
    }
  }

  return distances;
};
