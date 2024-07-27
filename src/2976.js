/**
 * You are given two 0-indexed strings source and target, both of length n and
 * consisting of lowercase English letters. You are also given two 0-indexed
 * character arrays original and changed, and an integer array cost, where cost[i]
 * represents the cost of changing the character original[i] to the character
 * changed[i].
 *
 * You start with the string source. In one operation, you can pick a character x
 * from the string and change it to the character y at a cost of z if there exists
 * any index j such that cost[j] == z, original[j] == x, and changed[j] == y.
 *
 * Return the minimum cost to convert the string source to the string target using
 * any number of operations. If it is impossible to convert source to target,
 * return -1.
 *
 * Note that there may exist indices i, j such that original[j] == original[i] and
 * changed[j] == changed[i].
 *
 *
 *
 * Example 1:
 *
 *
 * Input: source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]
 * Output: 28
 * Explanation: To convert the string "abcd" to string "acbe":
 * - Change value at index 1 from 'b' to 'c' at a cost of 5.
 * - Change value at index 2 from 'c' to 'e' at a cost of 1.
 * - Change value at index 2 from 'e' to 'b' at a cost of 2.
 * - Change value at index 3 from 'd' to 'e' at a cost of 20.
 * The total cost incurred is 5 + 1 + 2 + 20 = 28.
 * It can be shown that this is the minimum possible cost.
 *
 *
 * Example 2:
 *
 *
 * Input: source = "aaaa", target = "bbbb", original = ["a","c"], changed = ["c","b"], cost = [1,2]
 * Output: 12
 * Explanation: To change the character 'a' to 'b' change the character 'a' to 'c' at a cost of 1, followed by changing the character 'c' to 'b' at a cost of 2, for a total cost of 1 + 2 = 3. To change all occurrences of 'a' to 'b', a total cost of 3 * 4 = 12 is incurred.
 *
 *
 * Example 3:
 *
 *
 * Input: source = "abcd", target = "abce", original = ["a"], changed = ["e"], cost = [10000]
 * Output: -1
 * Explanation: It is impossible to convert source to target because the value at index 3 cannot be changed from 'd' to 'e'.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= source.length == target.length <= 105
 *  * source, target consist of lowercase English letters.
 *  * 1 <= cost.length == original.length == changed.length <= 2000
 *  * original[i], changed[i] are lowercase English letters.
 *  * 1 <= cost[i] <= 106
 *  * original[i] != changed[i]
 *
 *
 *
 * https://leetcode.com/problems/minimum-cost-to-convert-string-i
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

// zips all of the arrays into one
const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(({ length }) => length));
  return [...Array(maxLength).keys()].map((i) => arrays.map((x) => x[i]));
};

// returns an array of characters from 'a' to 'z'
const aToZ = () => [...Array(26).keys()].map((x) => String.fromCharCode(x + 97));

// converts an array of edges [from, to, weight] to an adjacency list.
const toGraph = (edges) =>
  edges.reduce(
    (acc, [from, to, weight]) => {
      acc.get(from).push([to, weight]);
      return acc;
    },
    new Map(aToZ().map((x) => [x, []])),
  );

// returns the destination of the edge.
const to = (edge) => edge[0];

// returns the weight of the edge.
const weight = (edge) => edge[1];

// returns the min cost to travel from source to target (-1 if no path is possible)
const dijkstra = (graph, source, target) => {
  // short circuit if already at target.
  if (source === target) {
    return 0;
  }
  
  const queue = MinPriorityQueue.from([[source, 0]]);
  const distances = new Map(
    [...graph.keys()].map((key) => [key, Number.MAX_SAFE_INTEGER]),
  );
  distances.set(source, 0);

  while (queue.size()) {
    const { element: currentKey, priority: currentCost } = queue.dequeue();
    if (currentKey === target) {
      return currentCost;
    }
    for (const edge of graph.get(currentKey)) {
      const alt = distances.get(currentKey) + weight(edge);
      if (alt < distances.get(to(edge))) {
        distances.set(to(edge), alt);
        queue.enqueue(to(edge), alt);
      }
    }
  }
  return -1;
};

// returns the sum of the numbers in the array.
const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

// returns a string hash of the source / target combination.
const hash = (source, target) => `${source}.${target}`;

/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
export const minimumCost = (source, target, original, changed, cost) => {
  const graph = toGraph(zip(original, changed, cost));
  const cache = new Map();
  // calculate the min cost of changing each source char to target char.
  const costs = [...source].map((sourceChar, i) => {
    // cache costs in case character transformations are duplicated.
    if (!cache.has(hash(sourceChar, target[i]))) {
      const minCost = dijkstra(graph, sourceChar, target[i]);
      cache.set(hash(sourceChar, target[i]), minCost);
    }
    return cache.get(hash(sourceChar, target[i]));
  });
  // changing from source to target is not possible if any char failed to map.
  return costs.every((x) => x !== -1) ? sum(costs) : -1;
};
