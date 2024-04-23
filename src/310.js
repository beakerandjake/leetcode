/**
 * A tree is an undirected graph in which any two vertices are connected
 * by exactly one path. In other words, any connected graph without simple cycles
 * is a tree.
 *
 * Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges
 * where edges[i] = [ai, bi] indicates that there is an undirected edge between the
 * two nodes ai and bi in the tree, you can choose any node of the tree as the
 * root. When you select a node x as the root, the result tree has height h. Among
 * all possible rooted trees, those with minimum height (i.e. min(h))  are called
 * minimum height trees (MHTs).
 *
 * Return a list of all MHTs' root labels. You can return the answer in any order.
 *
 * The height of a rooted tree is the number of edges on the longest downward path
 * between the root and a leaf.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/09/01/e1.jpg]
 *
 *
 * Input: n = 4, edges = [[1,0],[1,2],[1,3]]
 * Output: [1]
 * Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/09/01/e2.jpg]
 *
 *
 * Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
 * Output: [3,4]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n <= 2 * 104
 *  * edges.length == n - 1
 *  * 0 <= ai, bi < n
 *  * ai != bi
 *  * All the pairs (ai, bi) are distinct.
 *  * The given input is guaranteed to be a tree and there will be no repeated
 *    edges.
 *
 *
 *
 * https://leetcode.com/problems/minimum-height-trees
 */

const simpleBfs = (() => {
  const buildGraph = (n, edges) => {
    const graph = [...Array(n)].reduce((acc, _, i) => acc.set(i, []), new Map());
    return edges.reduce((acc, [from, to]) => {
      acc.get(from).push(to);
      acc.get(to).push(from);
      return acc;
    }, graph);
  };

  const findHeight = (graph, root, minHeight) => {
    let result = 0;
    const queue = [{ vertex: root, depth: 0 }];
    const visited = new Set([root]);
    while (queue.length) {
      const { vertex, depth } = queue.shift();
      if (depth > minHeight) {
        return Number.MAX_SAFE_INTEGER;
      }
      result = Math.max(result, depth);
      for (const edge of graph.get(vertex)) {
        if (!visited.has(edge)) {
          visited.add(edge);
          queue.push({ vertex: edge, depth: depth + 1 });
        }
      }
    }
    return result;
  };

  return (n, edges) => {
    const heights = [...Array(n)].reduce((acc, _, i) => acc.set(i, 0), new Map());
    let minHeight = Number.MAX_SAFE_INTEGER;
    const graph = buildGraph(n, edges);
    for (const vertex of graph.keys()) {
      const height = findHeight(graph, vertex, minHeight);
      minHeight = Math.min(minHeight, height);
      heights.set(vertex, height);
    }
    return [...heights.entries()].filter(([_, v]) => v === minHeight).map(([k, _]) => k);
  };
})();

const modifiedBfs = (() => {
  const buildGraph = (n, edges) => {
    const graph = [...Array(n)].reduce((acc, _, i) => acc.set(i, []), new Map());
    return edges.reduce((acc, [from, to]) => {
      acc.get(from).push(to);
      acc.get(to).push(from);
      return acc;
    }, graph);
  };

  const findLeaves = (graph) => {
    const result = [];
    for (const [vertex, edges] of graph.entries()) {
      if (edges.length === 1) {
        result.push(vertex);
      }
    }
    return result;
  };

  const deleteLeaf = (graph, leaf) => {
    for (const edge of graph.get(leaf)) {
      graph.set(
        edge,
        graph.get(edge).filter((e) => e !== leaf),
      );
    }
    graph.delete(leaf);
  };

  return (n, edges) => {
    const graph = buildGraph(n, edges);
    let leaves = findLeaves(graph);
    while (graph.size > 2) {
      for (const leaf of leaves) {
        deleteLeaf(graph, leaf);
      }
      leaves = findLeaves(graph);
    }
    return [...graph.keys()];
  };
})();

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
export const findMinHeightTrees = modifiedBfs;
