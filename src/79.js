/**
 * Given an m x n grid of characters board and a string word, return true if word
 * exists in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cells, where
 * adjacent cells are horizontally or vertically neighboring. The same letter cell
 * may not be used more than once.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/11/04/word2.jpg]
 *
 *
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * Output: true
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/11/04/word-1.jpg]
 *
 *
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
 * Output: true
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2020/10/15/word3.jpg]
 *
 *
 * Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
 * Output: false
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == board.length
 *  * n = board[i].length
 *  * 1 <= m, n <= 6
 *  * 1 <= word.length <= 15
 *  * board and word consists of only lowercase and uppercase English letters.
 *
 *
 *
 * Follow up: Could you use search pruning to make your solution faster with a
 * larger board?
 *
 *
 *
 * https://leetcode.com/problems/word-search
 */

// returns a new matrix filled with the value.
const fill = (height, width, value) =>
  [...Array(height)].map(() => Array(width).fill(value));

// returns the number of rows in the matrix.
const height = (matrix) => matrix?.length || 0;

// returns the number of columns in the matrix.
const width = (matrix) => matrix[0]?.length || 0;

// returns true if the point is out of bounds of the matrix.
const outOfBounds = (matrix, y, x) =>
  y < 0 || y >= height(matrix) || x < 0 || x >= width(matrix);

// array containing the offsets of each neighboring point.
const neighborOffsets = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
export const exist = (board, word) => {
  const visited = fill(height(board), width(board), false);

  // returns true if the word can be formed from the specified cell of the matrix.
  const formsWord = (index, y, x) => {
    // word was formed if every char of the word was found.
    if (index >= word.length) {
      return true;
    }
    // can't form word if cell is off board.
    if (outOfBounds(board, y, x)) {
      return false;
    }
    // can't form word if using already visited cell.
    if (visited[y][x]) {
      return false;
    }
    // can't form word if cell doesn't match required character.
    if (board[y][x] !== word[index]) {
      return false;
    }
    visited[y][x] = true;
    // attempt to form the word with each neighbor.
    for (const [nY, nX] of neighborOffsets) {
      if (formsWord(index + 1, nY + y, nX + x)) {
        return true;
      }
    }
    // backtrack, this cell didn't form word but might be used in the final solution.
    visited[y][x] = false;
    return false;
  };

  // iterate every cell of the board and see if the word can be formed from this cell.
  for (let y = 0; y < height(board); y++) {
    for (let x = 0; x < width(board); x++) {
      if (formsWord(0, y, x)) {
        return true;
      }
    }
  }

  return false;
};
