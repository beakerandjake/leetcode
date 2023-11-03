/**
 * A gene string can be represented by an 8-character long string, with choices
 * from 'A', 'C', 'G', and 'T'.
 *
 * Suppose we need to investigate a mutation from a gene string startGene to a gene
 * string endGene where one mutation is defined as one single character changed in
 * the gene string.
 *
 *  * For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
 *
 * There is also a gene bank bank that records all the valid gene mutations. A gene
 * must be in bank to make it a valid gene string.
 *
 * Given the two gene strings startGene and endGene and the gene bank bank, return
 * the minimum number of mutations needed to mutate from startGene to endGene. If
 * there is no such a mutation, return -1.
 *
 * Note that the starting point is assumed to be valid, so it might not be included
 * in the bank.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
 * Output: 2
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= bank.length <= 10
 *  * startGene.length == endGene.length == bank[i].length == 8
 *  * startGene, endGene, and bank[i] consist of only the characters ['A', 'C',
 *    'G', 'T'].
 *
 *
 *
 * https://leetcode.com/problems/minimum-genetic-mutation
 */

const isConnected = (a, b) => {
  let foundDifference = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
};

const buildGraph = (vertexes) => {
  const graph = {};
  for (const current of vertexes) {
    graph[current] = [];
    for (const vertex of vertexes) {
      if (vertex !== current && isConnected(current, vertex)) {
        graph[current].push(vertex);
      }
    }
  }
  return graph;
};

/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
export const minMutation = (startGene, endGene, bank) => {
  const graph = buildGraph([...new Set([startGene, ...bank])]);
  const queue = [{ vertex: startGene, mutations: 0 }];
  const visited = new Set();
  while (queue.length) {
    const { vertex, mutations } = queue.shift();
    if (vertex === endGene) {
      return mutations;
    }
    if (!visited.has(vertex)) {
      visited.add(vertex);
      for (const edge of graph[vertex]) {
        if (!visited.has(edge)) {
          queue.push({ vertex: edge, mutations: mutations + 1 });
        }
      }
    }
  }
  return -1;
};
