/**
 * You are given an m x n grid where each cell can have one of three values:
 *     0 representing an empty cell,
 *     1 representing a fresh orange, or
 *     2 representing a rotten orange.
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 */

const FRESH = 1;
const ROTTEN = 2;
const UNEXPLORED = Number.MAX_SAFE_INTEGER;

const getShape = (grid) => ({ height: grid.length, width: grid[0].length });

const emptyGrid = ({ width, height }, fill) =>
  [...Array(height)].map(() => Array(width).fill(fill));

const directions = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

const inBounds = (x, y, { width, height }) => x >= 0 && x < width && y >= 0 && y < height;

const max = (grid) => Math.max(...grid.flat());

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const orangesRotting = (grid) => {
  const shape = getShape(grid);
  const history = emptyGrid(shape, 0);
  const rottenQueue = [];
  // find the rotten oranges and ready the history.
  for (let y = 0; y < shape.height; y++) {
    for (let x = 0; x < shape.width; x++) {
      if (grid[y][x] === ROTTEN) {
        rottenQueue.push({ y, x });
      } else if (grid[y][x] === FRESH) {
        history[y][x] = UNEXPLORED;
      }
    }
  }
  // spread rotting oranges as far as possible.
  while (rottenQueue.length) {
    const { x, y } = rottenQueue.shift();
    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;
      if (inBounds(nx, ny, shape) && history[ny][nx] === UNEXPLORED) {
        history[ny][nx] = history[y][x] + 1;
        rottenQueue.push({ y: ny, x: nx });
      }
    }
  }

  // if couldn't reach every orange then history will have unexplored tiles.
  const minutes = max(history, shape);
  return minutes !== UNEXPLORED ? minutes : -1;
};
