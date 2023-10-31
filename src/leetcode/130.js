/* eslint-disable no-param-reassign */
/**
 * Given an m x n matrix board containing 'X' and 'O', capture all regions that are
 * 4-directionally surrounded by 'X'.
 *
 * A region is captured by flipping all 'O's into 'X's in that surrounded region.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg]
 *
 *
 * Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
 * Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
 * Explanation: Notice that an 'O' should not be flipped if:
 * - It is on the border, or
 * - It is adjacent to an 'O' that should not be flipped.
 * The bottom 'O' is on the border, so it is not flipped.
 * The other three 'O' form a surrounded region, so they are flipped.
 *
 *
 * Example 2:
 *
 *
 * Input: board = [["X"]]
 * Output: [["X"]]
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == board.length
 *  * n == board[i].length
 *  * 1 <= m, n <= 200
 *  * board[i][j] is 'X' or 'O'.
 *
 *
 *
 * https://leetcode.com/problems/surrounded-regions
 */

const TILES = {
  x: 'X',
  o: 'O',
  visited: '#',
};

const getShape = (board) => ({ height: board.length, width: board[0].length });

const findEdgeOs = (board, { width, height }) => {
  const found = [];
  // search across the row for Os.
  const searchRow = (row) => {
    for (let col = 0; col < width; col++) {
      if (board[row][col] === TILES.o) {
        found.push({ x: col, y: row });
      }
    }
  };
  // search across the col for Os (skipping top and bottom cells already search by searchRow)
  const searchCol = (col) => {
    for (let row = 1; row < height - 1; row++) {
      if (board[row][col] === TILES.o) {
        found.push({ x: col, y: row });
      }
    }
  };
  searchRow(0);
  searchRow(height - 1);
  searchCol(0);
  searchCol(width - 1);
  return found;
};

const outOfBounds = ({ width, height }, x, y) =>
  x < 0 || x >= width || y < 0 || y >= height;

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
export const solve = (board) => {
  const shape = getShape(board);

  // edge case every cell on board is an edge.
  if (shape.height <= 2 || shape.height <= 2) {
    return;
  }

  // recursively visit every O connected to the point
  const dfs = (x, y) => {
    if (
      outOfBounds(shape, x, y) ||
      board[y][x] === TILES.visited ||
      board[y][x] === TILES.x
    ) {
      return;
    }
    board[y][x] = TILES.visited;
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
    dfs(x - 1, y);
  };

  // visit every O connected to the edge Os
  for (const { x, y } of findEdgeOs(board, shape)) {
    dfs(x, y);
  }

  // repaint the board to flip visited to O and O to X tiles.
  for (let y = 0; y < shape.height; y++) {
    for (let x = 0; x < shape.width; x++) {
      if (board[y][x] === TILES.visited) {
        board[y][x] = TILES.o;
      } else if (board[y][x] === TILES.o) {
        board[y][x] = TILES.x;
      }
    }
  }
};
