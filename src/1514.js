/**
 * You are given an undirected weighted graph of n nodes (0-indexed), represented
 * by an edge list where edges[i] = [a, b] is an undirected edge connecting the
 * nodes a and b with a probability of success of traversing that edge succProb[i].
 *
 * Given two nodes start and end, find the path with the maximum probability of
 * success to go from start to end and return its success probability.
 *
 * If there is no path from start to end, return 0. Your answer will be accepted if
 * it differs from the correct answer by at most 1e-5.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2019/09/20/1558_ex1.png]
 *
 *
 * Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
 * Output: 0.25000
 * Explanation: There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2019/09/20/1558_ex2.png]
 *
 *
 * Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2
 * Output: 0.30000
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2019/09/20/1558_ex3.png]
 *
 *
 * Input: n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2
 * Output: 0.00000
 * Explanation: There is no path between 0 and 2.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 2 <= n <= 10^4
 *  * 0 <= start, end < n
 *  * start != end
 *  * 0 <= a, b < n
 *  * a != b
 *  * 0 <= succProb.length == edges.length <= 2*10^4
 *  * 0 <= succProb[i] <= 1
 *  * There is at most one edge between every two nodes.
 *
 *
 *
 * https://leetcode.com/problems/path-with-maximum-probability
 */

import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

const toEdge = (dest, weight) => [dest, weight];

const emptyGraph = (n) => [...Array(n)].reduce((acc, _, i) => acc.set(i, []), new Map());

const toGraph = (n, edges, success) =>
  edges.reduce((acc, [from, to], i) => {
    acc.get(from).push(toEdge(to, success[i]));
    acc.get(to).push(toEdge(from, success[i]));
    return acc;
  }, emptyGraph(n));

const dijkstra = (graph, start, target) => {
  const dist = [...Array(graph.size)].map((_, i) => (i === start ? 1 : 0));
  const queue = MaxPriorityQueue.from([[start, 1]]);
  while (!queue.isEmpty()) {
    const { element: node, priority: probability } = queue.dequeue();
    if (node === target) {
      return probability;
    }
    for (const [dest, weight] of graph.get(node)) {
      if (weight * probability > dist[dest]) {
        dist[dest] = weight * probability;
        queue.enqueue(dest, weight * probability);
      }
    }
  }
  return 0;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} success
 * @param {number} start
 * @param {number} target
 * @return {number}
 */
export const maxProbability = (n, edges, success, start, target) => {
  const graph = toGraph(n, edges, success);
  console.log(graph);
  return dijkstra(graph, start, target);
};
