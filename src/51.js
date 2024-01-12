/**
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
 * Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
 */

const toString = (board) =>
  board.map((row) => row.map((cell) => (cell ? 'Q' : '.')).join(''));

const createBoard = (n) => [...Array(n)].map(() => Array(n).fill(0));

const directions = [
  // up
  [0, -1],
  // up right
  [1, -1],
  // up right
  [-1, -1],
];

const canPlace = (board, n, y, x) => {
  for (const [dx, dy] of directions) {
    let newX = dx + x;
    let newY = dy + y;
    while (newX >= 0 && newX < n && newY >= 0 && newY < n) {
      if (board[newY][newX]) {
        return false;
      }
      newX += dx;
      newY += dy;
    }
  }
  return true;
};

/**
 * @param {number} n
 * @return {string[][]}
 */
export const solveNQueens = (n) => {
  const solutions = [];
  const board = createBoard(n);
  const helper = (row) => {
    if (row >= n) {
      solutions.push(toString(board));
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
  return solutions;
};
