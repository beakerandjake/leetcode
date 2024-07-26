/**
 * There are n cities numbered from 0 to n-1. Given the array edges where edges[i]
 * = [fromi, toi, weighti] represents a bidirectional and weighted edge between
 * cities fromi and toi, and given the integer distanceThreshold.
 *
 * Return the city with the smallest number of cities that are reachable through
 * some path and whose distance is at most distanceThreshold, If there are multiple
 * such cities, return the city with the greatest number.
 *
 * Notice that the distance of a path connecting cities i and j is equal to the sum
 * of the edges' weights along that path.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/01/16/find_the_city_01.png]
 *
 *
 * Input: n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4
 * Output: 3
 * Explanation: The figure above describes the graph.
 * The neighboring cities at a distanceThreshold = 4 for each city are:
 * City 0 -> [City 1, City 2]
 * City 1 -> [City 0, City 2, City 3]
 * City 2 -> [City 0, City 1, City 3]
 * City 3 -> [City 1, City 2]
 * Cities 0 and 3 have 2 neighboring cities at a distanceThreshold = 4, but we have to return city 3 since it has the greatest number.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/01/16/find_the_city_02.png]
 *
 *
 * Input: n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2
 * Output: 0
 * Explanation: The figure above describes the graph.
 * The neighboring cities at a distanceThreshold = 2 for each city are:
 * City 0 -> [City 1]
 * City 1 -> [City 0, City 4]
 * City 2 -> [City 3, City 4]
 * City 3 -> [City 2, City 4]
 * City 4 -> [City 1, City 2, City 3]
 * The city 0 has 1 neighboring city at a distanceThreshold = 2.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 2 <= n <= 100
 *  * 1 <= edges.length <= n * (n - 1) / 2
 *  * edges[i].length == 3
 *  * 0 <= fromi < toi < n
 *  * 1 <= weighti, distanceThreshold <= 10^4
 *  * All pairs (fromi, toi) are distinct.
 *
 *
 *
 * https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance
 */

import { MinPriorityQueue } from '@datastructures-js/priority-queue';

// builds an adjacency list for nodes 0 to n-1 with defined edges.
const toGraph = (n, edges) =>
  edges.reduce(
    (acc, [f, t, w]) => {
      acc.get(f).push([t, w]);
      acc.get(t).push([f, w]);
      return acc;
    },
    new Map([...Array(n)].map((_, i) => [i, []])),
  );

// returns the destination of an edge.
const to = (edge) => edge[0];

// returns the weight of an edge.
const weight = (edge) => edge[1];

// returns the number of cities which can be reached from the start city while staying under the distance limit.
const dijkstra = (graph, start, limit) => {
  const queue = new MinPriorityQueue();
  const distances = Array(graph.size).fill(Number.MAX_SAFE_INTEGER);

  queue.enqueue(start, 0);
  distances[start] = 0;

  while (queue.size()) {
    const { element: city, priority: distance } = queue.dequeue();
    // if past limit, not possible to ever go under it again.
    if (distance > limit) {
      break;
    }
    for (const edge of graph.get(city)) {
      const alt = distances[city] + weight(edge);
      if (alt < distances[to(edge)]) {
        distances[to(edge)] = alt;
        queue.enqueue(to(edge), alt);
      }
    }
  }
  return distances.filter((x) => x <= limit).length;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
export const findTheCity = (n, edges, distanceThreshold) => {
  const graph = toGraph(n, edges);
  const cities = [...Array(n).keys()];
  const reachable = cities.map((city) => dijkstra(graph, city, distanceThreshold));
  // sort by # reachable (asc), if tie then sort by city key (desc)
  cities.sort((cityA, cityB) =>
    reachable[cityA] === reachable[cityB]
      ? cityB - cityA
      : reachable[cityA] - reachable[cityB],
  );
  return cities[0];
};
