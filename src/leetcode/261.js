/**
 * You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.
 *
 * Return true if the edges of the given graph make up a valid tree, and false otherwise.
 *
 * Example 1:
 * https://assets.leetcode.com/uploads/2021/03/12/tree1-graph.jpg
 * Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
 * Output: true
 *
 * Example 2:
 * https://assets.leetcode.com/uploads/2021/03/12/tree2-graph.jpg
 * Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
 * Output: false
 *
 * https://leetcode.com/problems/graph-valid-tree
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

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  roots() {
    return [...new Set(this.nodes)];
  }
}

const hasSingleRoot = (n, edges) => {
  const set = new DisjointSet(n);
  for (const [from, to] of edges) {
    set.union(from, to);
  }
  return set.roots().length === 1;
};

const toGraph = (n, edges) => {
  const graph = [...Array(n)].reduce((acc, _, i) => {
    acc[i] = [];
    return acc;
  }, {});

  return edges.reduce((acc, [from, to]) => {
    acc[from].push(to);
    acc[to].push(from);
    return acc;
  }, graph);
};

const hasNoCycles = (n, edges) => {
  const graph = toGraph(n, edges);
  const visited = new Set();
  const hasCycle = (vertex, parent) => {
    if (visited.has(vertex)) {
      return true;
    }
    visited.add(vertex);
    for (const edge of graph[vertex]) {
      if (edge !== parent && hasCycle(edge, vertex)) {
        return true;
      }
    }
    return false;
  };
  return !hasCycle(0, null);
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
export const validTree = (n, edges) => hasSingleRoot(n, edges) && hasNoCycles(n, edges);
