/**
 * There is an undirected connected tree with n nodes labeled from 0 to n - 1 and n
 * - 1 edges.
 *
 * You are given the integer n and the array edges where edges[i] = [ai, bi]
 * indicates that there is an edge between nodes ai and bi in the tree.
 *
 * Return an array answer of length n where answer[i] is the sum of the distances
 * between the ith node in the tree and all other nodes.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2021/07/23/lc-sumdist1.jpg]
 *
 *
 * Input: n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
 * Output: [8,12,6,10,10,10]
 * Explanation: The tree is shown above.
 * We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
 * equals 1 + 1 + 2 + 2 + 2 = 8.
 * Hence, answer[0] = 8, and so on.
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2021/07/23/lc-sumdist2.jpg]
 *
 *
 * Input: n = 1, edges = []
 * Output: [0]
 *
 *
 * Example 3:
 *
 * [https://assets.leetcode.com/uploads/2021/07/23/lc-sumdist3.jpg]
 *
 *
 * Input: n = 2, edges = [[1,0]]
 * Output: [1,1]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n <= 3 * 104
 *  * edges.length == n - 1
 *  * edges[i].length == 2
 *  * 0 <= ai, bi < n
 *  * ai != bi
 *  * The given input represents a valid tree.
 *
 *
 *
 * https://leetcode.com/problems/sum-of-distances-in-tree
 */

const toGraph = (n, edges) => {
  const graph = [...Array(n)].reduce((acc, _, i) => acc.set(i, []), new Map());
  return edges.reduce((acc, [from, to]) => {
    acc.get(from).push(to);
    acc.get(to).push(from);
    return acc;
  }, graph);
};

const bruteForce = (() => {
  const distances = (start, graph) => {
    let sum = 0;
    const queue = [{ current: start, distance: 0 }];
    const visited = new Set([start]);
    while (queue.length) {
      const { current, distance } = queue.shift();
      sum += distance;
      for (const neighbor of graph.get(current)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push({ current: neighbor, distance: distance + 1 });
        }
      }
    }
    return sum;
  };

  return (n, edges) => {
    const results = [];
    const graph = toGraph(n, edges);
    for (let i = 0; i < n; i++) {
      results[i] = distances(i, graph);
    }
    return results;
  };
})();

const doubleDfs = (n, edges) => {
  const graph = toGraph(n, edges);
  const counts = [...Array(n)].fill(1);
  const answer = [...Array(n)].fill(0);

  const dfs = (node, parent) => {
    for (const child of graph.get(node)) {
      if (child !== parent) {
        dfs(child, node);
        counts[node] += counts[child];
        answer[node] += answer[child] + counts[child];
      }
    }
  };

  const dfs2 = (node, parent) => {
    for (const child of graph.get(node)) {
      if (child !== parent) {
        answer[child] = answer[node] - counts[child] + (n - counts[child]);
        dfs2(child, node);
      }
    }
  };

  dfs(0, -1);
  dfs2(0, -1);
  return answer;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
export const sumOfDistancesInTree = doubleDfs;
