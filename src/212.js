/**
 * Given an m x n board of characters and a list of strings words, return all words
 * on the board.
 *
 * Each word must be constructed from letters of sequentially adjacent cells, where
 * adjacent cells are horizontally or vertically neighboring. The same letter cell
 * may not be used more than once in a word.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/11/07/search1.jpg]
 *
 *
 * Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
 * Output: ["eat","oath"]
 *
 *
 * Example 2:
 *
 * [https://assets.leetcode.com/uploads/2020/11/07/search2.jpg]
 *
 *
 * Input: board = [["a","b"],["c","d"]], words = ["abcb"]
 * Output: []
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == board.length
 *  * n == board[i].length
 *  * 1 <= m, n <= 12
 *  * board[i][j] is a lowercase English letter.
 *  * 1 <= words.length <= 3 * 104
 *  * 1 <= words[i].length <= 10
 *  * words[i] consists of lowercase English letters.
 *  * All the strings of words are unique.
 *
 *
 *
 * https://leetcode.com/problems/word-search-ii
 */

class TrieNode {
  constructor(isWord) {
    this.isWord = !!isWord;
    this.children = new Map();
  }
}

class Trie {
  #root = new TrieNode();

  constructor(words) {
    for (const word of words) {
      this.push(word);
    }
  }

  push(word) {
    let current = this.#root;
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }
    current.isWord = true;
  }

  contains(word) {
    let current = this.#root;
    for (const char of word) {
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char);
    }
    return current.isWord;
  }

  hasPrefix(prefix) {
    if (!prefix?.length) {
      return false;
    }
    let current = this.#root;
    for (const char of prefix) {
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char);
    }
    return true;
  }

  query(str) {
    let current = this.#root;
    for (const char of str) {
      if (!current.children.has(char)) {
        return { includes: false, isWord: false };
      }
      current = current.children.get(char);
    }
    return { includes: true, isWord: current.isWord };
  }
}

// returns a new m x n matrix
const empty = (m, n) => [...Array(m)].map(() => Array(n).fill(false));

// returns the height of the matrix.
const height = (matrix) => matrix.length;

// returns the width of the matrix.
const width = (matrix) => matrix[0].length;

const inBounds = (matrix, y, x) =>
  y >= 0 && y < height(matrix) && x >= 0 && x < width(matrix);

const neighborDirections = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

// returns an array of all words which can be formed from this cell.
const explore = (matrix, y, x, current, lookup, words, visited) => {
  const formed = current + matrix[y][x];
  const { includes, isWord } = lookup.query(formed);
  if (!includes) {
    return;
  }
  if (isWord) {
    words.delete(formed);
    if (!words.size) {
      return;
    }
  }
  visited[y][x] = true;
  for (const [dY, dX] of neighborDirections) {
    const nY = y + dY;
    const nX = x + dX;
    if (inBounds(matrix, nY, nX) && !visited[nY][nX]) {
      explore(matrix, nY, nX, formed, lookup, words, visited);
    }
  }
  visited[y][x] = false;
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
export const findWords = (board, words) => {
  const trie = new Trie(words);
  const remaining = new Set(words);
  const visited = empty(height(board), width(board));
  for (let y = 0; y < height(board); y++) {
    for (let x = 0; x < width(board); x++) {
      // ignore cell if isn't the start of a word.
      if (!trie.hasPrefix(board[y][x])) {
        continue;
      }
      // remove all words which can be formed by starting at this cell
      explore(board, y, x, '', trie, remaining, visited);
      // attempt to end early if all words found.
      if (!remaining.size) {
        return words;
      }
    }
  }
  // return all of the words which were found.
  return words.filter((word) => !remaining.has(word));
};
