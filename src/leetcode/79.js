/* eslint-disable no-param-reassign */
/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
 */

const getShape = (board) => ({
  height: board.length,
  width: board.length ? board[0].length : 0,
});

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

const zeros = ({ width, height }) => [...Array(height)].map(() => Array(width).fill(0));

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

const add = (lhs, rhs) => ({ x: lhs.x + rhs.x, y: lhs.y + rhs.y });

const inBounds = ({ width, height }, { x, y }) =>
  x >= 0 && x < width && y >= 0 && y < height;

const getNeighbors = (shape, position) =>
  cardinalDirections.reduce((acc, direction) => {
    const neighbor = add(position, direction);
    if (inBounds(shape, neighbor)) {
      acc.push(neighbor);
    }
    return acc;
  }, []);

const formsWord = (board, shape, word, position, wordIndex, visited) => {
  if (wordIndex === word.length - 1) {
    return true;
  }
  for (const neighbor of getNeighbors(shape, position)) {
    const { x, y } = neighbor;
    if (board[y][x] === word[wordIndex + 1] && !visited[y][x]) {
      visited[y][x] = 1;
      if (formsWord(board, shape, word, neighbor, wordIndex + 1, visited)) {
        return true;
      }
      visited[y][x] = 0;
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
  const visited = zeros(shape);

  for (const match of matches) {
    visited[match.y][match.x] = 1;
    if (formsWord(board, shape, word, match, 0, visited)) {
      return true;
    }
    visited[match.y][match.x] = 0;
  }
  return false;
};
