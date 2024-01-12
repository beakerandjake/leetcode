/**
 * There are n cities. Some of them are connected, while some are not. If city a is
 * connected directly with city b, and city b is connected directly with city c,
 * then city a is connected indirectly with city c.
 *
 * A province is a group of directly or indirectly connected cities and no other
 * cities outside of the group.
 *
 * You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith
 * city and the jth city are directly connected, and isConnected[i][j] = 0
 * otherwise.
 *
 * Return the total number of provinces.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg]
 *
 *
 * Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
 * Output: 2
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg]
 *
 *
 * Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
 * Output: 3
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n <= 200
 *  * n == isConnected.length
 *  * n == isConnected[i].length
 *  * isConnected[i][j] is 1 or 0.
 *  * isConnected[i][i] == 1
 *  * isConnected[i][j] == isConnected[j][i]
 *
 *
 *
 * https://leetcode.com/problems/number-of-provinces
 */

class DisjointSet {
  constructor(size) {
    this.set = [...Array(size)].map((_, i) => i);
  }

  find(x) {
    return this.set[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      for (let i = 0; i < this.set.length; i++) {
        if (this.set[i] === rootY) {
          this.set[i] = rootX;
        }
      }
    }
  }

  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }
}

const disjointSet = (isConnected) => {
  let connections = 0;
  const set = new DisjointSet(isConnected.length);
  for (let row = 0; row < isConnected.length; row++) {
    for (let col = 0; col < isConnected.length; col++) {
      if (isConnected[row][col] && !set.isConnected(row, col)) {
        set.union(row, col);
        connections++;
      }
    }
  }
  return isConnected.length - connections;
};

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
export const findCircleNum = (isConnected) => {
  const visited = Array(isConnected.length).fill(0);
  const dfs = (index) => {
    visited[index] = true;
    const connections = isConnected[index];
    for (let n = 0; n < connections.length; n++) {
      if (connections[n] && !visited[n]) {
        dfs(n);
      }
    }
  };

  let visitCount = 0;
  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      visitCount++;
      dfs(i);
    }
  }

  return visitCount;
};
