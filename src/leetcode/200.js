/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 */

const getShape = (world) => ({
  height: world.length,
  width: world.length ? world[0].length : 0,
});

const empty = ({ width, height }) => [...Array(height)].map(() => Array(width).fill(0));

const inBounds = (x, y, { width, height }) => x >= 0 && x < width && y >= 0 && y < height;

const isLand = (x, y, world) => world[y][x] === '1';

// bfs solution
const bfs = (() => {
  const directions = [
    // up
    { x: 0, y: -1 },
    // right
    { x: 1, y: 0 },
    // down
    { x: 0, y: 1 },
    // left
    { x: -1, y: 0 },
  ];

  const add = (p1, p2) => ({ x: p1.x + p2.x, y: p1.y + p2.y });

  const neighbors = (point, shape) =>
    directions
      .map((direction) => add(direction, point))
      .filter((neighbor) => inBounds(...neighbor, shape));

  return (world) => {
    let islandCount = 0;
    const shape = getShape(world);
    const visited = empty(shape);
    for (let y = 0; y < shape.height; y++) {
      for (let x = 0; x < shape.width; x++) {
        // skip if visited island, or water.
        if (visited[y][x] || world[y][x] === '0') {
          continue;
        }
        // explore this unvisited island.
        const queue = [{ y, x }];
        while (queue.length) {
          const point = queue.shift();
          if (visited[point.y][point.x]) {
            continue;
          }
          visited[point.y][point.x] = 1;
          queue.push(
            ...neighbors(point, shape).filter((neighbor) => isLand(...neighbor, world))
          );
        }
        islandCount += 1;
      }
    }
    return islandCount;
  };
})();

// dfs solution
const dfs = (world) => {
  const shape = getShape(world);
  const visited = empty(shape);
  const exploreIsland = (y, x) => {
    if (!inBounds(x, y, shape) || !isLand(x, y, world) || visited[y][x]) {
      return;
    }
    visited[y][x] = 1;
    exploreIsland(y - 1, x);
    exploreIsland(y, x + 1);
    exploreIsland(y + 1, x);
    exploreIsland(y, x - 1);
  };

  let islandCount = 0;
  for (let y = 0; y < shape.height; y++) {
    for (let x = 0; x < shape.width; x++) {
      if (visited[y][x] || !isLand(x, y, world)) {
        continue;
      }
      islandCount++;
      exploreIsland(y, x);
    }
  }
  return islandCount;
};

/**
 * @param {character[][]} world
 * @return {number}
 */
export const numIslands = dfs;
