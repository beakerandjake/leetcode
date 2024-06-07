/**
 * In English, we have a concept called root, which can be followed by some other
 * word to form another longer word - let's call this word derivative. For example,
 * when the root "help" is followed by the word "ful", we can form a derivative
 * "helpful".
 *
 * Given a dictionary consisting of many roots and a sentence consisting of words
 * separated by spaces, replace all the derivatives in the sentence with the root
 * forming it. If a derivative can be replaced by more than one root, replace it
 * with the root that has the shortest length.
 *
 * Return the sentence after the replacement.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
 * Output: "the cat was rat by the bat"
 *
 *
 * Example 2:
 *
 *
 * Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
 * Output: "a a b c"
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= dictionary.length <= 1000
 *  * 1 <= dictionary[i].length <= 100
 *  * dictionary[i] consists of only lower-case letters.
 *  * 1 <= sentence.length <= 106
 *  * sentence consists of only lower-case letters and spaces.
 *  * The number of words in sentence is in the range [1, 1000]
 *  * The length of each word in sentence is in the range [1, 1000]
 *  * Every two consecutive words in sentence will be separated by exactly one
 *    space.
 *  * sentence does not have leading or trailing spaces.
 *
 *
 *
 * https://leetcode.com/problems/replace-words
 */

class TrieNode {
  constructor(isWord) {
    this.isWord = isWord;
    this.children = new Map();
  }

  has(char) {
    return this.children.has(char);
  }

  set(char, node) {
    this.children.set(char, node);
  }

  get(char) {
    return this.children.get(char);
  }
}

class Trie {
  #root = null;
  constructor() {
    this.#root = new TrieNode(false);
  }

  insert(word) {
    let current = this.#root;
    for (const char of word) {
      if (!current.has(char)) {
        current.set(char, new TrieNode());
      }
      current = current.get(char);
    }
    current.isWord = true;
    return this;
  }

  findPrefix(word) {
    let index = 0;
    let current = this.#root;
    for (const char of word) {
      if (!current.has(char)) {
        return null;
      }
      current = current.get(char);
      if (current.isWord) {
        return word.slice(0, index + 1);
      }
      index++;
    }
    return null;
  }
}

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
export const replaceWords = (dictionary, sentence) => {
  const trie = dictionary.reduce((acc, x) => acc.insert(x), new Trie());
  return sentence
    .split(/\s+/)
    .map((word) => trie.findPrefix(word) || word)
    .join(' ');
};
