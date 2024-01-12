/**
 * You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.
 *
 * Return the number of connected components in the graph.
 *
 * Example 1:
 * https://assets.leetcode.com/uploads/2021/03/14/conn1-graph.jpg
 * Input: n = 5, edges = [[0,1],[1,2],[3,4]]
 * Output: 2
 *
 * Example 2:
 * https://assets.leetcode.com/uploads/2021/03/14/conn2-graph.jpg
 * Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
 * Output: 1
 *
 * https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph
 */

class DisjointSet {
  constructor(n) {
    this.nodes = [...Array(n)].map((_, i) => i);
  }

  find(x) {
    return this.nodes[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      for (let i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i] === rootY) {
          this.nodes[i] = rootX;
        }
      }
    }
  }

  rootNodes() {
    return [...new Set(this.nodes)];
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
export const countComponents = (n, edges) => {
  const set = edges.reduce((acc, [from, to]) => {
    acc.union(from, to);
    return acc;
  }, new DisjointSet(n));

  return set.rootNodes().length;
};
