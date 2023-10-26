/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 */

const hashPosition = ({ x, y }) => `${x} ${y}`;

const getShape = (board) => ({
  height: board.length,
  width: board.length ? board[0].length : 0,
});

const add = (lhs, rhs) => ({ x: lhs.x + rhs.x, y: lhs.y + rhs.y });

const inBounds = ({ width, height }, { x, y }) =>
  x >= 0 && x < width && y >= 0 && y < height;

const findLetter = (board, { width, height }, letter) => {
  const matches = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (board[y][x] === letter) {
        matches.push({ y, x });
      }
    }
  }
  return matches;
};

const cardinalDirections = [
  // up
  { x: 0, y: -1 },
  // right,
  { x: 1, y: 0 },
  // down
  { x: 0, y: 1 },
  // left
  { x: -1, y: 0 },
];

const getNeighbors = (shape, position) =>
  cardinalDirections
    .map((direction) => add(position, direction))
    .filter((neighbor) => inBounds(shape, neighbor));

const formsWord = (board, shape, word, position, wordIndex, visited) => {
  if (word[wordIndex] !== board[position.y][position.x]) {
    return false;
  }
  if (wordIndex === word.length - 1) {
    return true;
  }

  for (const neighbor of getNeighbors(shape, position)) {
    const hash = hashPosition(neighbor);
    if (!visited.has(hash)) {
      visited.add(hash);
      if (formsWord(board, shape, word, neighbor, wordIndex + 1, visited)) {
        return true;
      }
      visited.delete(hash);
    }
  }
  return false;
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
export const exist = (board, word) => {
  const shape = getShape(board);
  const matches = findLetter(board, shape, word[0]);

  if (word.length === 1) {
    return !!matches.length;
  }

  for (const match of matches) {
    if (formsWord(board, shape, word, match, 0, new Set([hashPosition(match)]))) {
      return true;
    }
  }
  return false;
};
