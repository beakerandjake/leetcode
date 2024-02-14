/**
 * You are given a rows x cols matrix grid representing a field of cherries where
 * grid[i][j] represents the number of cherries that you can collect from the (i,
 * j) cell.
 *
 * You have two robots that can collect cherries for you:
 *
 *  * Robot #1 is located at the top-left corner (0, 0), and
 *  * Robot #2 is located at the top-right corner (0, cols - 1).
 *
 * Return the maximum number of cherries collection using both robots by following
 * the rules below:
 *
 *  * From a cell (i, j), robots can move to cell (i + 1, j - 1), (i + 1, j), or (i
 *    + 1, j + 1).
 *  * When any robot passes through a cell, It picks up all cherries, and the cell
 *    becomes an empty cell.
 *  * When both robots stay in the same cell, only one takes the cherries.
 *  * Both robots cannot move outside of the grid at any moment.
 *  * Both robots should reach the bottom row in grid.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/04/29/sample_1_1802.png]
 *
 *
 * Input: grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]
 * Output: 24
 * Explanation: Path of robot #1 and #2 are described in color green and blue respectively.
 * Cherries taken by Robot #1, (3 + 2 + 5 + 2) = 12.
 * Cherries taken by Robot #2, (1 + 5 + 5 + 1) = 12.
 * Total of cherries: 12 + 12 = 24.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/04/23/sample_2_1802.png]
 *
 *
 * Input: grid = [[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]]
 * Output: 28
 * Explanation: Path of robot #1 and #2 are described in color green and blue respectively.
 * Cherries taken by Robot #1, (1 + 9 + 5 + 2) = 17.
 * Cherries taken by Robot #2, (1 + 3 + 4 + 3) = 11.
 * Total of cherries: 17 + 11 = 28.
 *
 *
 *
 *
 * Constraints:
 *
 *  * rows == grid.length
 *  * cols == grid[i].length
 *  * 2 <= rows, cols <= 70
 *  * 0 <= grid[i][j] <= 100
 *
 *
 *
 * https://leetcode.com/problems/cherry-pickup-ii
 */

// column movement deltas each robot is allowed to take.
const colDeltas = [-1, 0, 1];

// return 3d array of height x width x width
const buildMemo = (height, width) =>
  [...Array(height)].map(() => [...Array(width)].map(() => Array(width).fill(-1)));

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const cherryPickup = (grid) => {
  const height = grid.length;
  const width = grid[0].length;
  const memo = buildMemo(height, width);
  const dp = (row, aCol, bCol) => {
    if (aCol < 0 || bCol < 0 || aCol >= width || bCol >= width || row >= height) {
      return 0;
    }
    if (memo[row][aCol][bCol] === -1) {
      let max = 0;
      // find the future moves which return the most cherries.
      for (const aDelta of colDeltas) {
        for (const bDelta of colDeltas) {
          max = Math.max(max, dp(row + 1, aCol + aDelta, bCol + bDelta));
        }
      }
      // robots cannot double pick up if on same spot.
      const pickedUp =
        aCol !== bCol ? grid[row][aCol] + grid[row][bCol] : grid[row][aCol];

      // result is what was picked up this turn, plus best possible future pick ups.
      memo[row][aCol][bCol] = pickedUp + max;
    }
    return memo[row][aCol][bCol];
  };
  return dp(0, 0, width - 1);
};
