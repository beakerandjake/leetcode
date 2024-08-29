/**
 * On a 2D plane, we place n stones at some integer coordinate points. Each
 * coordinate point may have at most one stone.
 *
 * A stone can be removed if it shares either the same row or the same column as
 * another stone that has not been removed.
 *
 * Given an array stones of length n where stones[i] = [xi, yi] represents the
 * location of the ith stone, return the largest possible number of stones that can
 * be removed.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
 * Output: 5
 * Explanation: One way to remove 5 stones is as follows:
 * 1. Remove stone [2,2] because it shares the same row as [2,1].
 * 2. Remove stone [2,1] because it shares the same column as [0,1].
 * 3. Remove stone [1,2] because it shares the same row as [1,0].
 * 4. Remove stone [1,0] because it shares the same column as [0,0].
 * 5. Remove stone [0,1] because it shares the same row as [0,0].
 * Stone [0,0] cannot be removed since it does not share a row/column with another stone still on the plane.
 *
 *
 * Example 2:
 *
 *
 * Input: stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
 * Output: 3
 * Explanation: One way to make 3 moves is as follows:
 * 1. Remove stone [2,2] because it shares the same row as [2,0].
 * 2. Remove stone [2,0] because it shares the same column as [0,0].
 * 3. Remove stone [0,2] because it shares the same row as [0,0].
 * Stones [0,0] and [1,1] cannot be removed since they do not share a row/column with another stone still on the plane.
 *
 *
 * Example 3:
 *
 *
 * Input: stones = [[0,0]]
 * Output: 0
 * Explanation: [0,0] is the only stone on the plane, so you cannot remove it.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= stones.length <= 1000
 *  * 0 <= xi, yi <= 104
 *  * No two stones are at the same coordinate point.
 *
 *
 *
 * https://leetcode.com/problems/most-stones-removed-with-same-row-or-column
 */

// converts the stones array to an adjacency matrix
// "compresses" the actual space between stones and creates direct edges between them
const toGraph = (() => {
  // maps each stone to its property value extracted by the keyFn
  const toLookup = (stones, keyFn) =>
    stones.reduce((acc, stone) => {
      if (!acc.has(keyFn(stone))) {
        acc.set(keyFn(stone), []);
      }
      acc.get(keyFn(stone)).push(stone);
      return acc;
    }, new Map());

  // returns a hash representation of the stone
  const hash = (stone) => `<${stone}>`;

  // returns the row of the stone
  const row = (stone) => stone[0];

  // returns the col of the stone
  const col = (stone) => stone[1];

  // returns all of the stones that the given stone is connected to by row/col
  const getEdges = (stone, rowLookup, colLookup) => [
    ...rowLookup.get(row(stone)).filter((x) => x !== stone),
    ...colLookup.get(col(stone)).filter((x) => x !== stone),
  ];

  return (stones) => {
    const rows = toLookup(stones, row);
    const cols = toLookup(stones, col);
    return stones.reduce(
      (acc, stone) => acc.set(hash(stone), getEdges(stone, rows, cols).map(hash)),
      new Map(),
    );
  };
})();

// explores each vertex connected to the start vertex and returns all vertexes explored
// mutates the visited set.
const bfs = (graph, start, visited) => {
  const result = [];
  const queue = [start];
  visited.add(start);
  while (queue.length) {
    const vertex = queue.shift();
    result.push(vertex);
    for (const edge of graph.get(vertex)) {
      if (!visited.has(edge)) {
        queue.push(edge);
        visited.add(edge);
      }
    }
  }
  return result;
};

// yields each component / connected subgraph / disjoint set of the graph
const components = function* (graph) {
  const visited = new Set();
  for (const vertex of graph.keys()) {
    if (!visited.has(vertex)) {
      yield bfs(graph, vertex, visited);
    }
  }
};

// returns the sum of all elements in the array
const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

/**
 * @param {number[][]} stones
 * @return {number}
 */
export const removeStones = (stones) =>
  sum([...components(toGraph(stones))].map((set) => set.length - 1));
