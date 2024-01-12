/**
 * Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj)
 * such that row ri and column cj are equal.
 *
 * A row and column pair is considered equal if they contain the same elements in
 * the same order (i.e., an equal array).
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2022/06/01/ex1.jpg]
 *
 *
 * Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
 * Output: 1
 * Explanation: There is 1 equal row and column pair:
 * - (Row 2, Column 1): [2,7,7]
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2022/06/01/ex2.jpg]
 *
 *
 * Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
 * Output: 3
 * Explanation: There are 3 equal row and column pairs:
 * - (Row 0, Column 0): [3,1,2,2]
 * - (Row 2, Column 2): [2,4,2,2]
 * - (Row 3, Column 2): [2,4,2,2]
 *
 *
 *
 *
 * Constraints:
 *
 *  * n == grid.length == grid[i].length
 *  * 1 <= n <= 200
 *  * 1 <= grid[i][j] <= 105
 *
 *
 *
 * https://leetcode.com/problems/equal-row-and-column-pairs
 */

const hashRow = (grid, row) => grid[row].join(',');

const hashCol = (grid, col) => grid.map((row) => row[col]).join(',');

const hashMap = (grid, hashFn) => {
  const map = new Map();
  for (let i = 0; i < grid.length; i++) {
    map.set(i, hashFn(grid, i));
  }
  return map;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
export const equalPairs = (grid) => {
  const n = grid.length;
  const rowHash = hashMap(grid, hashRow);
  const colHash = hashMap(grid, hashCol);
  let pairs = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (rowHash.get(row) === colHash.get(col)) {
        pairs++;
      }
    }
  }
  return pairs;
};
