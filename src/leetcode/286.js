/**
 * You are given an m x n grid rooms initialized with these three possible values.
 *
 *     -1 A wall or an obstacle.
 *     0 A gate.
 *     INF Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
 *
 * Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.
 */
const tiles = {
  gate: 0,
  wall: -1,
  empty: 2147483647,
};

const getShape = (matrix) => ({ height: matrix.length, width: matrix[0].length });

const gates = (matrix, { width, height }) => {
  const found = [];
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      if (matrix[y][x] === tiles.gate) {
        found.push({ y, x });
      }
    }
  }
  return found;
};

const directions = [
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
];

const add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });

const inBounds = ({ x, y }, { width, height }) =>
  x >= 0 && x < width && y >= 0 && y < height;

const neighbors = (point, shape) =>
  directions
    .map((direction) => add(direction, point))
    .filter((neighbor) => inBounds(neighbor, shape));

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
export const wallsAndGates = (matrix) => {
  const shape = getShape(matrix);
  const queue = gates(matrix, shape)
    .flatMap((gate) => neighbors(gate, shape))
    .map((point) => ({ point, distance: 1 }));

  while (queue.length) {
    const { point, distance } = queue.shift();
    if (matrix[point.y][point.x] === tiles.empty) {
      matrix[point.y][point.x] = distance;
      queue.push(
        ...neighbors(point, shape).map((n) => ({ point: n, distance: distance + 1 }))
      );
    }
  }
};
