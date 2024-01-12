/**
 * Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of
 * Tic-Tac-Toe are:
 *
 *  * Players take turns placing characters into empty squares ' '.
 *  * The first player A always places 'X' characters, while the second player B
 *    always places 'O' characters.
 *  * 'X' and 'O' characters are always placed into empty squares, never on filled
 *    ones.
 *  * The game ends when there are three of the same (non-empty) character filling
 *    any row, column, or diagonal.
 *  * The game also ends if all squares are non-empty.
 *  * No more moves can be played if the game is over.
 *
 * Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the
 * ith move will be played on grid[rowi][coli]. return the winner of the game if it
 * exists (A or B). In case the game ends in a draw return "Draw". If there are
 * still movements to play return "Pending".
 *
 * You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe),
 * the grid is initially empty, and A will play first.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/09/22/xo1-grid.jpg]
 *
 *
 * Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
 * Output: "A"
 * Explanation: A wins, they always play first.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/09/22/xo2-grid.jpg]
 *
 *
 * Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
 * Output: "B"
 * Explanation: B wins.
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2021/09/22/xo3-grid.jpg]
 *
 *
 * Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
 * Output: "Draw"
 * Explanation: The game ends in a draw since there are no moves to make.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= moves.length <= 9
 *  * moves[i].length == 2
 *  * 0 <= rowi, coli <= 2
 *  * There are no repeated elements on moves.
 *  * moves follow the rules of tic tac toe.
 *
 *
 *
 * https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game
 */

const emptyBoard = () => [...Array(3)].map(() => Array(3).fill(' '));

const place = (board, [y, x], player) => {
  const copy = board.map((row) => [...row]);
  copy[y][x] = player;
  return copy;
};

const playerToken = (moveIndex) => (moveIndex % 2 === 0 ? 'X' : 'O');

const getCol = (board, index) => board.map((row) => row[index]);

const getRow = (board, index) => board[index];

const diag = (board, up) => {
  let col = up ? 0 : board.length - 1;
  return board.map((x) => x[up ? col++ : col--]);
};

// eslint-disable-next-line func-style
function* candidates(board) {
  for (let col = 0; col < board.length; col++) {
    yield getCol(board, col);
  }
  for (let row = 0; row < board.length; row++) {
    yield getRow(board, row);
  }
  yield diag(board, true);
  yield diag(board, false);
}

const threeOfAKind = (squares) => squares[0] !== ' ' && new Set(squares).size === 1;

const findWinningToken = (board) => {
  for (const candidate of candidates(board)) {
    if (threeOfAKind(candidate)) {
      return candidate[0];
    }
  }
  return null;
};

/**
 * @param {number[][]} moves
 * @return {string}
 */
export const tictactoe = (moves) => {
  const board = moves.reduce((acc, x, i) => place(acc, x, playerToken(i)), emptyBoard());
  const winningToken = findWinningToken(board);
  if (!winningToken) {
    return moves.length === 9 ? 'Draw' : 'Pending';
  }
  return winningToken === 'X' ? 'A' : 'B';
};
