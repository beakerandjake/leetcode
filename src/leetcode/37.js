/* eslint-disable no-param-reassign */
/**
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 * A sudoku solution must satisfy all of the following rules:
 *     Each of the digits 1-9 must occur exactly once in each row.
 *     Each of the digits 1-9 must occur exactly once in each column.
 *     Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 * The '.' character indicates empty cells.
 */

const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const existsInRow = (board, index, digit) => board[index].some((x) => x === digit);

const existsInCol = (board, index, digit) => board.some((row) => row[index] === digit);

const translateToSquare = (pos) => {
  if (pos < 3) {
    return 0;
  }
  if (pos < 6) {
    return 3;
  }
  return 6;
};

const existsInSquare = (board, row, col, digit) => {
  const top = translateToSquare(row);
  const left = translateToSquare(col);
  for (let sy = 0; sy < 3; sy++) {
    for (let sx = 0; sx < 3; sx++) {
      const y = top + sy;
      const x = left + sx;
      if (y === row && x === col) {
        continue;
      }
      if (board[y][x] === digit) {
        return true;
      }
    }
  }
  return false;
};

const collision = (board, row, col, digit) =>
  existsInRow(board, row, digit) ||
  existsInCol(board, col, digit) ||
  existsInSquare(board, row, col, digit);

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
export const solveSudoku = (board) => {
  const helper = (row, col) => {
    // if reached end we have solved.
    if (row > 8) {
      return true;
    }
    // if already solved, skip to next cell.
    if (board[row][col] !== '.') {
      return col === 8 ? helper(row + 1, 0) : helper(row, col + 1);
    }

    // attempt to put each digit in the cell, backtracking on failure.
    for (const digit of digits) {
      if (!collision(board, row, col, digit)) {
        board[row][col] = digit;
        if (col === 8 ? helper(row + 1, 0) : helper(row, col + 1)) {
          return true;
        }
        board[row][col] = '.';
      }
    }
    return false;
  };
  helper(0, 0);
};
