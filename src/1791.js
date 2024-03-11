/**
 * There is an undirected star graph consisting of n nodes labeled from 1 to n. A
 * star graph is a graph where there is one center node and exactly n - 1 edges
 * that connect the center node with every other node.
 *
 * You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates
 * that there is an edge between the nodes ui and vi. Return the center of the
 * given star graph.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/02/24/star_graph.png]
 *
 *
 * Input: edges = [[1,2],[2,3],[4,2]]
 * Output: 2
 * Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
 *
 *
 * Example 2:
 *
 *
 * Input: edges = [[1,2],[5,1],[1,3],[1,4]]
 * Output: 1
 *
 *
 *
 *
 * Constraints:
 *
 *  * 3 <= n <= 105
 *  * edges.length == n - 1
 *  * edges[i].length == 2
 *  * 1 <= ui, vi <= n
 *  * ui != vi
 *  * The given edges represent a valid star graph.
 *
 *
 *
 * https://leetcode.com/problems/find-center-of-star-graph
 */

// returns a new adjacency matrix formed by the edges.
const toGraph = (edges) =>
  edges.reduce((acc, [from, to]) => {
    if (!acc.has(from)) {
      acc.set(from, [to]);
    } else {
      acc.get(from).push(to);
    }

    if (!acc.has(to)) {
      acc.set(to, [from]);
    } else {
      acc.get(to).push(from);
    }

    return acc;
  }, new Map());

/**
 * @param {number[][]} edges
 * @return {number}
 */
export const findCenter = (edges) => {
  const graph = toGraph(edges);
  // center vertex has outgoing edge count equal to n - 1.
  const target = graph.size - 1;
  for (const [v, e] of graph) {
    if (e.length === target) {
      return v;
    }
  }
  return -1;
};
