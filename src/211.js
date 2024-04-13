/**
 * Design a data structure that supports adding new words and finding if a string
 * matches any previously added string.
 *
 * Implement the WordDictionary class:
 *
 *  * WordDictionary() Initializes the object.
 *  * void addWord(word) Adds word to the data structure, it can be matched later.
 *  * bool search(word) Returns true if there is any string in the data structure
 *    that matches word or false otherwise. word may contain dots '.' where dots
 *    can be matched with any letter.
 *
 *
 *
 * Example:
 *
 *
 * Input
 * ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
 * [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
 * Output
 * [null,null,null,null,false,true,true,true]
 *
 * Explanation
 * WordDictionary wordDictionary = new WordDictionary();
 * wordDictionary.addWord("bad");
 * wordDictionary.addWord("dad");
 * wordDictionary.addWord("mad");
 * wordDictionary.search("pad"); // return False
 * wordDictionary.search("bad"); // return True
 * wordDictionary.search(".ad"); // return True
 * wordDictionary.search("b.."); // return True
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= word.length <= 25
 *  * word in addWord consists of lowercase English letters.
 *  * word in search consist of '.' or lowercase English letters.
 *  * There will be at most 2 dots in word for search queries.
 *  * At most 104 calls will be made to addWord and search.
 *
 *
 *
 * https://leetcode.com/problems/design-add-and-search-words-data-structure
 */

/**
 * Design a data structure that supports adding new words and finding if a string
 * matches any previously added string.
 *
 * Implement the WordDictionary class:
 *
 *  * WordDictionary() Initializes the object.
 *  * void addWord(word) Adds word to the data structure, it can be matched later.
 *  * bool search(word) Returns true if there is any string in the data structure
 *    that matches word or false otherwise. word may contain dots '.' where dots
 *    can be matched with any letter.
 *
 *
 *
 * Example:
 *
 *
 * Input
 * ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
 * [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
 * Output
 * [null,null,null,null,false,true,true,true]
 *
 * Explanation
 * WordDictionary wordDictionary = new WordDictionary();
 * wordDictionary.addWord("bad");
 * wordDictionary.addWord("dad");
 * wordDictionary.addWord("mad");
 * wordDictionary.search("pad"); // return False
 * wordDictionary.search("bad"); // return True
 * wordDictionary.search(".ad"); // return True
 * wordDictionary.search("b.."); // return True
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= word.length <= 25
 *  * word in addWord consists of lowercase English letters.
 *  * word in search consist of '.' or lowercase English letters.
 *  * There will be at most 2 dots in word for search queries.
 *  * At most 104 calls will be made to addWord and search.
 *
 *
 *
 * https://leetcode.com/problems/design-add-and-search-words-data-structure
 */

class TrieNode {
  constructor(isWord) {
    this.isWord = !!isWord;
    this.children = new Map();
  }
}

export class WordDictionary {
  #root = new TrieNode();

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let current = this.#root;
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }
    current.isWord = true;
  }
  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    if (!word.length) {
      return false;
    }
    return this.#searchRecursive(this.#root, word, 0);
  }

  #searchRecursive(node, word, index) {
    if (!node) {
      return false;
    }
    if (index >= word.length) {
      return node.isWord;
    }

    if (word[index] !== '.') {
      return (
        node.children.has(word[index]) &&
        this.#searchRecursive(node.children.get(word[index]), word, index + 1)
      );
    }
    for (const child of node.children.values()) {
      if (this.#searchRecursive(child, word, index + 1)) {
        return true;
      }
    }
    return false;
  }
}
