/**
 * You are given an n x n binary matrix grid where 1 represents land and 0 represents water.
 * An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.
 * You may change 0's to 1's to connect the two islands to form one island.
 * Return the smallest number of 0's you must flip to connect the two islands.
 */

const LAND = 1;
const UNVISITED = Number.MAX_SAFE_INTEGER;

const findLand = (grid) => {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid.length; y++) {
      if (grid[y][x] === LAND) {
        return { x, y };
      }
    }
  }
  return null;
};

const matrix = (size, value) => [...Array(size)].map(() => Array(size).fill(value));

const inBounds = (x, y, n) => x >= 0 && x < n && y >= 0 && y < n;

const directions = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

const findShores = (point, grid) => {
  const history = matrix(grid.length, UNVISITED);
  const shores = [];
  const dfs = (x, y) => {
    if (history[y][x] !== UNVISITED) {
      return;
    }
    history[y][x] = 0;
    let addedShore = false;
    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;
      if (inBounds(nx, ny, grid.length)) {
        if (grid[ny][nx] === LAND) {
          dfs(nx, ny);
        } else if (!addedShore) {
          shores.push({ x, y });
          addedShore = true;
        }
      }
    }
  };
  dfs(point.x, point.y);
  return { history, shores };
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const shortestBridge = (grid) => {
  // explore the first island.
  const { history, shores } = findShores(findLand(grid), grid);

  // find shortest path from shores of first island to shores to second island.
  while (shores.length) {
    const { x, y } = shores.shift();
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (inBounds(nx, ny, grid.length) && history[ny][nx] === UNVISITED) {
        if (grid[ny][nx] === LAND) {
          return history[y][x];
        }
        history[ny][nx] = history[y][x] + 1;
        shores.push({ y: ny, x: nx });
      }
    }
  }
};
