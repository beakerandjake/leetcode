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
    return rootX !== rootY;
  }

  connected(x, y) {
    return this.find(x) === this.find(y);
  }

  roots() {
    return [...new Set(this.nodes)];
  }
}

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

const simple = (() => {
  const hasSingleRoot = (n, edges) => {
    const set = new DisjointSet(n);
    for (const [from, to] of edges) {
      set.union(from, to);
    }
    return set.roots().length === 1;
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

  return (n, edges) => hasSingleRoot(n, edges) && hasNoCycles(n, edges);
})();

const simpleDfs = (n, edges) => {
  const graph = toGraph(n, edges);
  const visited = new Set();
  const dfs = (vertex, parent) => {
    // if already encountered this node, then there is a cycle.
    if (visited.has(vertex)) {
      return false;
    }
    visited.add(vertex);
    for (const edge of graph[vertex]) {
      // visit every non parent neighbor.
      if (edge !== parent && !dfs(edge, vertex)) {
        return false;
      }
    }
    return true;
  };
  // ensure no cycles and every node was visited from root.
  return dfs(0, -1) && visited.size === n;
};

const betterDfs = (n, edges) => {
  if (edges.length !== n - 1) {
    return false;
  }
  const graph = toGraph(n, edges);
  const visited = new Set();
  const dfs = (vertex) => {
    visited.add(vertex);
    for (const edge of graph[vertex]) {
      if (!visited.has(edge)) {
        dfs(edge);
      }
    }
  };
  dfs(0);
  return visited.size === n;
};

const usingDisjointSet = (n, edges) => {
  if (edges.length !== n - 1) {
    return false;
  }

  const disjointSet = new DisjointSet(n);
  for (const [from, to] of edges) {
    if (!disjointSet.union(from, to)) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
export const validTree = usingDisjointSet;
