/**
 * You are given an m x n matrix maze (0-indexed) with empty cells (represented as
 * '.') and walls (represented as '+'). You are also given the entrance of the
 * maze, where entrance = [entrancerow, entrancecol] denotes the row and column of
 * the cell you are initially standing at.
 *
 * In one step, you can move one cell up, down, left, or right. You cannot step
 * into a cell with a wall, and you cannot step outside the maze. Your goal is to
 * find the nearest exit from the entrance. An exit is defined as an empty cell
 * that is at the border of the maze. The entrance does not count as an exit.
 *
 * Return the number of steps in the shortest path from the entrance to the nearest
 * exit, or -1 if no such path exists.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/06/04/nearest1-grid.jpg]
 *
 *
 * Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
 * Output: 1
 * Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
 * Initially, you are at the entrance cell [1,2].
 * - You can reach [1,0] by moving 2 steps left.
 * - You can reach [0,2] by moving 1 step up.
 * It is impossible to reach [2,3] from the entrance.
 * Thus, the nearest exit is [0,2], which is 1 step away.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/06/04/nearesr2-grid.jpg]
 *
 *
 * Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
 * Output: 2
 * Explanation: There is 1 exit in this maze at [1,2].
 * [1,0] does not count as an exit since it is the entrance cell.
 * Initially, you are at the entrance cell [1,0].
 * - You can reach [1,2] by moving 2 steps right.
 * Thus, the nearest exit is [1,2], which is 2 steps away.
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2021/06/04/nearest3-grid.jpg]
 *
 *
 * Input: maze = [[".","+"]], entrance = [0,0]
 * Output: -1
 * Explanation: There are no exits in this maze.
 *
 *
 *
 *
 * Constraints:
 *
 *  * maze.length == m
 *  * maze[i].length == n
 *  * 1 <= m, n <= 100
 *  * maze[i][j] is either '.' or '+'.
 *  * entrance.length == 2
 *  * 0 <= entrancerow < m
 *  * 0 <= entrancecol < n
 *  * entrance will always be an empty cell.
 *
 *
 *
 * https://leetcode.com/problems/nearest-exit-from-entrance-in-maze
 */

const WALL = '+';

const empty = (m, n) => [...Array(m)].map(() => Array(n).fill(0));

const getExitChecker = (maze, [entranceY, entranceX]) => {
  const maxRowIndex = maze.length - 1;
  const maxColIndex = maze[0].length - 1;
  return (y, x) => {
    if (maze[y][x] === WALL || (y === entranceY && x === entranceX)) {
      return false;
    }
    return y === 0 || x === 0 || y === maxRowIndex || x === maxColIndex;
  };
};

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const getBoundsChecker = (maze) => {
  const height = maze.length;
  const width = maze[0].length;
  return (y, x) => y >= 0 && y < height && x >= 0 && x < width;
};

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
export const nearestExit = (maze, entrance) => {
  const isExit = getExitChecker(maze, entrance);
  const inBounds = getBoundsChecker(maze);
  const visited = empty(maze.length, maze[0].length);
  const queue = [{ pos: entrance, distance: 0 }];
  while (queue.length) {
    const {
      pos: [y, x],
      distance,
    } = queue.shift();
    // first exit found is closest.
    if (isExit(y, x)) {
      return distance;
    }
    if (!visited[y][x]) {
      visited[y][x] = 1;
      for (const [dy, dx] of directions) {
        const ny = dy + y;
        const nx = dx + x;
        if (inBounds(ny, nx) && !visited[ny][nx] && maze[y][x] !== WALL) {
          queue.push({ pos: [ny, nx], distance: distance + 1 });
        }
      }
    }
  }
  return -1;
};
