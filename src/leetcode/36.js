const boxes = [
  [0, 0],
  [0, 3],
  [0, 6],
  [3, 0],
  [3, 3],
  [3, 6],
  [6, 0],
  [6, 3],
  [6, 6],
];

const gridSize = 9;

const fillArray = (size) => [...Array(size)].map((_, i) => i);

const toSet = (arr) => new Set(arr);

const compress = (arr) => arr.filter((x) => x !== '.');

const getRow = (board, index) => board[index];

const getCol = (board, index) => board.map((row) => row[index]);

const getBox = (board, y, x) => [
  ...board[y].slice(x, x + 3),
  ...board[y + 1].slice(x, x + 3),
  ...board[y + 2].slice(x, x + 3),
];

const isValid = (filledCells) => toSet(filledCells).size === filledCells.length;

const rowsAreValid = (board) =>
  fillArray(gridSize).every((index) => isValid(compress(getRow(board, index))));

const colsAreValid = (board) =>
  fillArray(gridSize).every((index) => isValid(compress(getCol(board, index))));

const subBoxesAreValid = (board) =>
  boxes.every(([y, x]) => isValid(compress(getBox(board, y, x))));

/**
 * @param {character[][]} board
 * @return {boolean}
 */
export const isValidSudoku = (board) =>
  rowsAreValid(board) && colsAreValid(board) && subBoxesAreValid(board);
