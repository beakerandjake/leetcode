/**
 * Alice and Bob have an undirected graph of n nodes and three types of edges:
 *
 *  * Type 1: Can be traversed by Alice only.
 *  * Type 2: Can be traversed by Bob only.
 *  * Type 3: Can be traversed by both Alice and Bob.
 *
 * Given an array edges where edges[i] = [typei, ui, vi] represents a bidirectional
 * edge of type typei between nodes ui and vi, find the maximum number of edges you
 * can remove so that after removing the edges, the graph can still be fully
 * traversed by both Alice and Bob. The graph is fully traversed by Alice and Bob
 * if starting from any node, they can reach all other nodes.
 *
 * Return the maximum number of edges you can remove, or return -1 if Alice and Bob
 * cannot fully traverse the graph.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/08/19/ex1.png]
 *
 *
 * Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]
 * Output: 2
 * Explanation: If we remove the 2 edges [1,1,2] and [1,1,3]. The graph will still be fully traversable by Alice and Bob. Removing any additional edge will not make it so. So the maximum number of edges we can remove is 2.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/08/19/ex2.png]
 *
 *
 * Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,4],[2,1,4]]
 * Output: 0
 * Explanation: Notice that removing any edge will not make the graph fully traversable by Alice and Bob.
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2020/08/19/ex3.png]
 *
 *
 * Input: n = 4, edges = [[3,2,3],[1,1,2],[2,3,4]]
 * Output: -1
 * Explanation: In the current graph, Alice cannot reach node 4 from the other nodes. Likewise, Bob cannot reach 1. Therefore it's impossible to make the graph fully traversable.
 *
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n <= 105
 *  * 1 <= edges.length <= min(105, 3 * n * (n - 1) / 2)
 *  * edges[i].length == 3
 *  * 1 <= typei <= 3
 *  * 1 <= ui < vi <= n
 *  * All tuples (typei, ui, vi) are distinct.
 *
 *
 *
 * https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable
 */

class DisjointSet {
  constructor(n) {
    this.nodes = [...Array(n)].map((_, i) => i);
    this.components = n - 1;
  }

  find(x) {
    return this.nodes[x] === x ? x : (this.nodes[x] = this.find(this.nodes[x]));
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.nodes[rootX] = rootY;
      this.components -= 1;
    }
    return rootX !== rootY;
  }

  get size() {
    return this.components;
  }
}

const type = (edge) => edge[0];

const from = (edge) => edge[1];

const to = (edge) => edge[2];

// eslint-disable-next-line func-style
function* iterateEdges(edges, edgeType) {
  for (const edge of edges) {
    if (type(edge) === edgeType) {
      yield edge;
    }
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
export const maxNumEdgesToRemove = (n, edges) => {
  let deletes = 0;
  const aliceGraph = new DisjointSet(n + 1);
  const bobGraph = new DisjointSet(n + 1);

  // build the graphs using as many type 3 edges as possible.
  for (const edge of iterateEdges(edges, 3)) {
    const a = aliceGraph.union(from(edge), to(edge));
    const b = bobGraph.union(from(edge), to(edge));
    if (!a && !b) {
      deletes++;
    }
  }

  // build the alice graph using alice specific nodes.
  for (const edge of iterateEdges(edges, 1)) {
    if (!aliceGraph.union(from(edge), to(edge))) {
      deletes++;
    }
  }

  // build the bob graph using bob specific nodes.
  for (const edge of iterateEdges(edges, 2)) {
    if (!bobGraph.union(from(edge), to(edge))) {
      deletes++;
    }
  }

  return aliceGraph.size === 1 && bobGraph.size === 1 ? deletes : -1;
};
