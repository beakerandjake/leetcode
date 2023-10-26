/**
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
 * Given an integer n, return the number of distinct solutions to the n-queens puzzle.
 */

const createBoard = (n) => [...Array(n)].map(() => Array(n).fill(0));

const directions = [
  // up,
  [0, -1],
  // up left,
  [-1, -1],
  // up right
  [1, -1],
];

const canPlace = (board, n, y, x) =>
  directions.every(([dx, dy]) => {
    let newY = y + dy;
    let newX = x + dx;
    while (newY >= 0 && newY < n && newX >= 0 && newX < n) {
      if (board[newY][newX]) {
        return false;
      }
      newY += dy;
      newX += dx;
    }
    return true;
  });

/**
 * @param {number} n
 * @return {number}
 */
export const totalNQueens = (n) => {
  const board = createBoard(n);
  let queenCount = 0;
  const helper = (row) => {
    if (row >= n) {
      queenCount += 1;
      return;
    }
    for (let col = 0; col < n; col++) {
      if (canPlace(board, n, row, col)) {
        board[row][col] = 1;
        helper(row + 1);
        board[row][col] = 0;
      }
    }
  };
  helper(0);
  return queenCount;
};
