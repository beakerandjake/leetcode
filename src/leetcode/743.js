/**
 * You are given a network of n nodes, labeled from 1 to n. You are also given
 * times, a list of travel times as directed edges times[i] = (ui, vi, wi), where
 * ui is the source node, vi is the target node, and wi is the time it takes for a
 * signal to travel from source to target.
 *
 * We will send a signal from a given node k. Return the minimum time it takes for
 * all the n nodes to receive the signal. If it is impossible for all the n nodes
 * to receive the signal, return -1.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2019/05/23/931_example_1.png]
 *
 *
 * Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: times = [[1,2,1]], n = 2, k = 1
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: times = [[1,2,1]], n = 2, k = 2
 * Output: -1
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= k <= n <= 100
 *  * 1 <= times.length <= 6000
 *  * times[i].length == 3
 *  * 1 <= ui, vi <= n
 *  * ui != vi
 *  * 0 <= wi <= 100
 *  * All the pairs (ui, vi) are unique. (i.e., no multiple edges.)
 *
 *
 *
 * https://leetcode.com/problems/network-delay-time
 */

const toGraph = (n, times) => {
  const empty = [...Array(n)].reduce((acc, _, i) => {
    acc[i + 1] = [];
    return acc;
  }, {});

  return times.reduce((acc, [from, to, weight]) => {
    acc[from].push([to, weight]);
    return acc;
  }, empty);
};

const initialDistances = (n, startVertex) => {
  const map = new Map();
  for (let i = 1; i <= n; i++) {
    map.set(i, i === startVertex ? 0 : Number.MAX_SAFE_INTEGER);
  }
  return map;
};

const findMin = (distances, visited) => {
  let minVertex;
  let minDistance = Number.MAX_SAFE_INTEGER;
  for (const [vertex, distance] of distances.entries()) {
    if (!visited.has(vertex) && distance < minDistance) {
      minVertex = vertex;
      minDistance = distance;
    }
  }
  return minVertex;
};

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
export const networkDelayTime = (times, n, k) => {
  const graph = toGraph(n, times);
  const visited = new Set();
  const distances = initialDistances(n, k);
  let current = k;
  while (current) {
    for (const [edge, weight] of graph[current]) {
      const alternate = distances.get(current) + weight;
      if (alternate < distances.get(edge)) {
        distances.set(edge, alternate);
      }
    }
    visited.add(current);
    current = findMin(distances, visited);
  }
  const maxTime = Math.max(...[...distances.values()]);
  return maxTime !== Number.MAX_SAFE_INTEGER ? maxTime : -1;
};
