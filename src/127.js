/**
 * A transformation sequence from word beginWord to word endWord using a dictionary
 * wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
 *
 *  * Every adjacent pair of words differs by a single letter.
 *  * Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to
 *    be in wordList.
 *  * sk == endWord
 *
 * Given two words, beginWord and endWord, and a dictionary wordList, return the
 * number of words in the shortest transformation sequence from beginWord to
 * endWord, or 0 if no such sequence exists.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
 * Output: 5
 * Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
 *
 *
 * Example 2:
 *
 *
 * Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
 * Output: 0
 * Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= beginWord.length <= 10
 *  * endWord.length == beginWord.length
 *  * 1 <= wordList.length <= 5000
 *  * wordList[i].length == beginWord.length
 *  * beginWord, endWord, and wordList[i] consist of lowercase English letters.
 *  * beginWord != endWord
 *  * All the words in wordList are unique.
 *
 *
 *
 * https://leetcode.com/problems/word-ladder
 */

const connected = (a, b) => {
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
  for (const vertex of vertexes) {
    graph[vertex] = [];
    for (const neighbor of vertexes) {
      if (vertex !== neighbor && connected(vertex, neighbor)) {
        graph[vertex].push(neighbor);
      }
    }
  }
  return graph;
};

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
export const ladderLength = (beginWord, endWord, wordList) => {
  const graph = buildGraph([beginWord, ...wordList]);
  if (!graph[endWord]) {
    return 0;
  }
  const queue = [{ vertex: beginWord, transforms: 1 }];
  const visited = new Set();
  while (queue.length) {
    const { vertex, transforms } = queue.shift();
    if (vertex === endWord) {
      return transforms;
    }
    if (!visited.has(vertex)) {
      visited.add(vertex);
      for (const edge of graph[vertex]) {
        if (!visited.has(edge)) {
          queue.push({ vertex: edge, transforms: transforms + 1 });
        }
      }
    }
  }
  return 0;
};
