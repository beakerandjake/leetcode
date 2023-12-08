/**
 * You are given an array of strings products and a string searchWord.
 *
 * Design a system that suggests at most three product names from products after
 * each character of searchWord is typed. Suggested products should have common
 * prefix with searchWord. If there are more than three products with a common
 * prefix return the three lexicographically minimums products.
 *
 * Return a list of lists of the suggested products after each character of
 * searchWord is typed.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
 * Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
 * Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
 * After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
 * After typing mou, mous and mouse the system suggests ["mouse","mousepad"].
 *
 *
 * Example 2:
 *
 *
 * Input: products = ["havana"], searchWord = "havana"
 * Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
 * Explanation: The only word "havana" will be always suggested while typing the search word.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= products.length <= 1000
 *  * 1 <= products[i].length <= 3000
 *  * 1 <= sum(products[i].length) <= 2 * 104
 *  * All the strings of products are unique.
 *  * products[i] consists of lowercase English letters.
 *  * 1 <= searchWord.length <= 1000
 *  * searchWord consists of lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/search-suggestions-system
 */

const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

class TrieNode {
  constructor(char, isWord) {
    this.char = char;
    this.isWord = !!isWord;
    this.children = new Map();
  }
}

class Trie {
  #root;

  constructor() {
    this.#root = new TrieNode('', false);
  }

  insert(word) {
    let current = this.#root;
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode(char));
      }
      current = current.children.get(char);
    }
    current.isWord = true;
  }

  suggest(prefix, limit) {
    let current = this.#root;
    for (const char of prefix) {
      if (!current.children.has(char)) {
        return [];
      }
      current = current.children.get(char);
    }

    const words = [];
    const recurse = (word, node) => {
      if (words.length >= limit) {
        return;
      }
      if (node.isWord) {
        words.push(word);
      }
      for (const char of alphabet) {
        if (node.children.has(char)) {
          recurse(word + char, node.children.get(char));
        }
      }
    };
    recurse(prefix, current);

    return words;
  }
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
export const suggestedProducts = (products, searchWord) => {
  const trie = products.reduce((acc, x) => {
    acc.insert(x);
    return acc;
  }, new Trie());

  const words = [];
  for (let i = 0; i < searchWord.length; i++) {
    words.push(trie.suggest(searchWord.slice(0, i + 1), 3));
  }

  return words;
};
