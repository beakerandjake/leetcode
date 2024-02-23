/**
 * There are n cities connected by some number of flights. You are given an array
 * flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight
 * from city fromi to city toi with cost pricei.
 *
 * You are also given three integers src, dst, and k, return the cheapest price
 * from src to dst with at most k stops. If there is no such route, return -1.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-3drawio.png]
 *
 *
 * Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
 * Output: 700
 * Explanation:
 * The graph is shown above.
 * The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
 * Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-1drawio.png]
 *
 *
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
 * Output: 200
 * Explanation:
 * The graph is shown above.
 * The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-2drawio.png]
 *
 *
 * Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
 * Output: 500
 * Explanation:
 * The graph is shown above.
 * The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n <= 100
 *  * 0 <= flights.length <= (n * (n - 1) / 2)
 *  * flights[i].length == 3
 *  * 0 <= fromi, toi < n
 *  * fromi != toi
 *  * 1 <= pricei <= 104
 *  * There will not be any multiple flights between two cities.
 *  * 0 <= src, dst, k < n
 *  * src != dst
 *
 *
 *
 * https://leetcode.com/problems/cheapest-flights-within-k-stops
 */

// builds a graph from the list of edges.
const buildGraph = (n, flights) =>
  flights.reduce((acc, [from, to, price]) => {
    acc.get(from).push({ to, price });
    return acc;
  }, new Map([...Array(n)].map((_, i) => [i, []])));

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dest
 * @param {number} k
 * @return {number}
 */
export const findCheapestPrice = (n, flights, src, dest, k) => {
  let minCost = Number.MAX_SAFE_INTEGER;
  const graph = buildGraph(n, flights);
  const queue = [{ vertex: src, cost: 0, steps: 0 }];
  const visited = new Map([[src, 0]]);
  while (queue.length) {
    const { vertex, cost, steps } = queue.shift();
    if (vertex === dest && steps - 1 <= k) {
      minCost = Math.min(minCost, cost);
    }
    for (const { to, price } of graph.get(vertex)) {
      const costToEdge = cost + price;
      if (!visited.has(to) || costToEdge < visited.get(to)) {
        visited.set(to, costToEdge);
        queue.push({ vertex: to, cost: costToEdge, steps: steps + 1 });
      }
    }
  }
  return minCost !== Number.MAX_SAFE_INTEGER ? minCost : -1;
};
