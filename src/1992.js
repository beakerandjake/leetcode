/**
 * You are given a 0-indexed m x n binary matrix land where a 0 represents a
 * hectare of forested land and a 1 represents a hectare of farmland.
 *
 * To keep the land organized, there are designated rectangular areas of hectares
 * that consist entirely of farmland. These rectangular areas are called groups. No
 * two groups are adjacent, meaning farmland in one group is not four-directionally
 * adjacent to another farmland in a different group.
 *
 * land can be represented by a coordinate system where the top left corner of land
 * is (0, 0) and the bottom right corner of land is (m-1, n-1). Find the
 * coordinates of the top left and bottom right corner of each group of farmland. A
 * group of farmland with a top left corner at (r1, c1) and a bottom right corner
 * at (r2, c2) is represented by the 4-length array [r1, c1, r2, c2].
 *
 * Return a 2D array containing the 4-length arrays described above for each group
 * of farmland in land. If there are no groups of farmland, return an empty array.
 * You may return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/07/27/screenshot-2021-07-27-at-12-23-15-copy-of-diagram-drawio-diagrams-net.png]
 *
 *
 * Input: land = [[1,0,0],[0,1,1],[0,1,1]]
 * Output: [[0,0,0,0],[1,1,2,2]]
 * Explanation:
 * The first group has a top left corner at land[0][0] and a bottom right corner at land[0][0].
 * The second group has a top left corner at land[1][1] and a bottom right corner at land[2][2].
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/07/27/screenshot-2021-07-27-at-12-30-26-copy-of-diagram-drawio-diagrams-net.png]
 *
 *
 * Input: land = [[1,1],[1,1]]
 * Output: [[0,0,1,1]]
 * Explanation:
 * The first group has a top left corner at land[0][0] and a bottom right corner at land[1][1].
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2021/07/27/screenshot-2021-07-27-at-12-32-24-copy-of-diagram-drawio-diagrams-net.png]
 *
 *
 * Input: land = [[0]]
 * Output: []
 * Explanation:
 * There are no groups of farmland.
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == land.length
 *  * n == land[i].length
 *  * 1 <= m, n <= 300
 *  * land consists of only 0's and 1's.
 *  * Groups of farmland are rectangular in shape.
 *
 *
 *
 * https://leetcode.com/problems/find-all-groups-of-farmland
 */

const height = (matrix) => matrix.length;

const width = (matrix) => matrix[0].length;

const isFarmLand = (matrix, y, x) => matrix[y][x] === 1;

const empty = (m, n, value) => [...Array(m)].map(() => Array(n).fill(value));

const inBounds = (matrix, y, x) =>
  y >= 0 && y < height(matrix) && x >= 0 && x < width(matrix);

// eslint-disable-next-line func-style
function* neighbors(y, x) {
  yield [y - 1, x];
  yield [y + 1, x];
  yield [y, x - 1];
  yield [y, x + 1];
}

const traverseGroup = (matrix, startY, startX, visited) => {
  const queue = [[startY, startX]];
  visited[startY][startX] = true;
  let maxHeight = startY;
  let maxWidth = startX;
  while (queue.length) {
    const [y, x] = queue.shift();
    maxHeight = Math.max(maxHeight, y);
    maxWidth = Math.max(maxWidth, x);
    for (const [ny, nx] of neighbors(y, x)) {
      if (inBounds(matrix, ny, nx) && !visited[ny][nx] && isFarmLand(matrix, ny, nx)) {
        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }
  }
  return [maxHeight, maxWidth];
};

/**
 * @param {number[][]} land
 * @return {number[][]}
 */
export const findFarmland = (land) => {
  const results = [];
  const visited = empty(height(land), width(land), false);
  for (let y = 0; y < height(land); y++) {
    for (let x = 0; x < width(land); x++) {
      if (!visited[y][x] && isFarmLand(land, y, x)) {
        const [endY, endX] = traverseGroup(land, y, x, visited);
        results.push([y, x, endY, endX]);
      }
    }
  }
  return results;
};
