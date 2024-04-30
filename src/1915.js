/**
 * A wonderful string is a string where at most one letter appears an odd number of
 * times.
 *
 *  * For example, "ccjjc" and "abab" are wonderful, but "ab" is not.
 *
 * Given a string word that consists of the first ten lowercase English letters
 * ('a' through 'j'), return the number of wonderful non-empty substrings in word.
 * If the same substring appears multiple times in word, then count each occurrence
 * separately.
 *
 * A substring is a contiguous sequence of characters in a string.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: word = "aba"
 * Output: 4
 * Explanation: The four wonderful substrings are underlined below:
 * - "aba" -> "a"
 * - "aba" -> "b"
 * - "aba" -> "a"
 * - "aba" -> "aba"
 *
 *
 * Example 2:
 *
 *
 * Input: word = "aabb"
 * Output: 9
 * Explanation: The nine wonderful substrings are underlined below:
 * - "aabb" -> "a"
 * - "aabb" -> "aa"
 * - "aabb" -> "aab"
 * - "aabb" -> "aabb"
 * - "aabb" -> "a"
 * - "aabb" -> "abb"
 * - "aabb" -> "b"
 * - "aabb" -> "bb"
 * - "aabb" -> "b"
 *
 *
 * Example 3:
 *
 *
 * Input: word = "he"
 * Output: 2
 * Explanation: The two wonderful substrings are underlined below:
 * - "he" -> "h"
 * - "he" -> "e"
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= word.length <= 105
 *  * word consists of lowercase English letters from 'a' to 'j'.
 *
 *
 *
 * https://leetcode.com/problems/number-of-wonderful-substrings
 */

const bruteForce = (() => {
  // eslint-disable-next-line func-style
  function* substrings(word) {
    for (let i = 0; i < word.length; i++) {
      for (let j = i; j < word.length; j++) {
        yield word.slice(i, j + 1);
      }
    }
  }

  const charCounts = (str) =>
    [...str].reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

  const isOdd = (num) => num % 2 !== 0;

  const isWonderful = (str) => [...charCounts(str).values()].filter(isOdd).length <= 1;

  return (word) => {
    let result = 0;
    for (const substring of substrings(word)) {
      if (isWonderful(substring)) {
        result++;
      }
    }
    return result;
  };
})();

const bitMasking = (() => {
  const bitIndex = (char) => char.charCodeAt(0) - 97;

  const xorBit = (value, index) => value ^ (1 << index);

  return (word) => {
    const frequency = Array(2 ** 10).fill(0);
    frequency[0] = 1;
    let mask = 0;
    let result = 0;
    for (let i = 0; i < word.length; i++) {
      mask = xorBit(mask, bitIndex(word[i]));
      result += frequency[mask];
      frequency[mask]++;
      for (let c = 0; c < 10; c++) {
        result += frequency[xorBit(mask, c)];
      }
    }
    return result;
  };
})();

/**
 * @param {string} word
 * @return {number}
 */
export const wonderfulSubstrings = bitMasking;
