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

// converts the edges array to an adjacency list representation of the graph
const toGraph = (edges) => {
  const empty = [...Array(edges.length + 1).keys()].reduce(
    (acc, x) => acc.set(x + 1, []),
    new Map(),
  );
  return edges.reduce((acc, [from, to]) => {
    acc.get(from).push(to);
    acc.get(to).push(from);
    return acc;
  }, empty);
};

// returns the vertex of the node.
const vertex = (node) => node[0];

// returns the edges of the node.
const edges = (node) => node[1];

// returns the first vertex which matches the predicate fn.
const findVertex = (graph, predicateFn) => {
  for (const node of graph) {
    if (predicateFn(node)) {
      return vertex(node);
    }
  }
  return null;
};

/**
 * @param {number[][]} allEdges
 * @return {number}
 */
export const findCenter = (allEdges) =>
  findVertex(toGraph(allEdges), (node) => edges(node).length === allEdges.length);
