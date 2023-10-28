/**
 * You are given an m x n grid rooms initialized with these three possible values.
 *
 *     -1 A wall or an obstacle.
 *     0 A gate.
 *     INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
 *
 * Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.
 */

const GATE = 0;
const EMPTY = 2147483647;

const getShape = (matrix) => ({ height: matrix.length, width: matrix[0].length });

const gates = (matrix, { width, height }) => {
  const found = [];
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (matrix[y][x] === GATE) {
        found.push([x, y]);
      }
    }
  }
  return found;
};

const directions = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

const inBounds = (x, y, { width, height }) => x >= 0 && x < width && y >= 0 && y < height;

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
export const wallsAndGates = (matrix) => {
  const shape = getShape(matrix);
  const queue = gates(matrix, shape);
  while (queue.length) {
    const [x, y] = queue.shift();
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (inBounds(nx, ny, shape) && matrix[ny][nx] === EMPTY) {
        matrix[ny][nx] = matrix[y][x] + 1;
        queue.push([nx, ny]);
      }
    }
  }
};
