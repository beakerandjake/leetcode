/**
 * According to Wikipedia's article
 * [https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life]: "The Game of Life, also
 * known simply as Life, is a cellular automaton devised by the British
 * mathematician John Horton Conway in 1970."
 *
 * The board is made up of anhttps://leetcode.com/problems/game-of-life/description/?envType=study-plan-v2&envId=top-interview-150 m x n grid of cells, where each cell has an initial
 * state: live (represented by a 1) or dead (represented by a 0). Each cell
 * interacts with its eight neighbors
 * [https://en.wikipedia.org/wiki/Moore_neighborhood] (horizontal, vertical,
 * diagonal) using the following four rules (taken from the above Wikipedia
 * article):
 *
 *  1. Any live cell with fewer than two live neighbors dies as if caused by
 *     under-population.
 *  2. Any live cell with two or three live neighbors lives on to the next
 *     generation.
 *  3. Any live cell with more than three live neighbors dies, as if by
 *     over-population.
 *  4. Any dead cell with exactly three live neighbors becomes a live cell, as if
 *     by reproduction.
 *
 * The next state is created by applying the above rules simultaneously to every
 * cell in the current state, where births and deaths occur simultaneously. Given
 * the current state of the m x n grid board, return the next state.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/12/26/grid1.jpg]
 *
 *
 * Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
 * Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/12/26/grid2.jpg]
 *
 *
 * Input: board = [[1,1],[1,0]]
 * Output: [[1,1],[1,1]]
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == board.length
 *  * n == board[i].length
 *  * 1 <= m, n <= 25
 *  * board[i][j] is 0 or 1.
 *
 *
 *
 * Follow up:
 *
 *  * Could you solve it in-place? Remember that the board needs to be updated
 *    simultaneously: You cannot update some cells first and then use their updated
 *    values to update other cells.
 *  * In this question, we represent the board using a 2D array. In principle, the
 *    board is infinite, which would cause problems when the active area encroaches
 *    upon the border of the array (i.e., live cells reach the border). How would
 *    you address these problems?
 *
 *
 *
 * https://leetcode.com/problems/game-of-life
 */

// returns a copy of the world.
const copy = (world) => world.map((row) => [...row]);

// returns the height of the world.
const height = (world) => world?.length || 0;

// returns the width of the world.
const width = (world) => world[0]?.length || 0;

// is the point in bounds of the world?
const inBounds = (world, y, x) =>
  y >= 0 && y < height(world) && x >= 0 && x < width(world);

// invokes the visitFn for each cell of the world.
const iterateBoard = (world, visitFn) => {
  for (let y = 0; y < height(world); y++) {
    for (let x = 0; x < width(world); x++) {
      visitFn(y, x);
    }
  }
};

// array containing offsets which lead to the cells moore neighbors.
const neighborOffsets = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

// returns an array containing all of the cells neighbors.
const neighbors = (board, y, x) =>
  neighborOffsets
    .map(([oY, oX]) => [oY + y, oX + x])
    .filter(([nY, nX]) => inBounds(board, nY, nX))
    .map(([nY, nX]) => board[nY][nX]);

// returns the sum of all elements in the array.
const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

// returns the number of living neighbors the cell has.
const liveNeighborCount = (board, y, x) => sum(neighbors(board, y, x));

// returns a tick function which can calculate the new state of the world given the current state.
const simulate = (liveCellRules, deadCellRules) => (currentState) => {
  const newState = copy(currentState);
  iterateBoard(currentState, (y, x) => {
    const liveCount = liveNeighborCount(currentState, y, x);
    const rules = currentState[y][x] ? liveCellRules : deadCellRules;
    for (const [predicateFn, result] of rules) {
      if (predicateFn(liveCount)) {
        newState[y][x] = result;
      }
    }
  });
  return newState;
};

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
export const gameOfLife = (board) => {
  const tick = simulate(
    [
      // under-population
      [(count) => count < 2, 0],
      // over-population
      [(count) => count > 3, 0],
    ],
    [
      // reproduction
      [(count) => count === 3, 1],
    ],
  );
  const nextState = tick(board);
  // problem requires mutation of original input
  iterateBoard(board, (y, x) => {
    board[y][x] = nextState[y][x];
  });
};
