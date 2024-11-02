/**
 * A sentence is a list of words that are separated by a single space with no
 * leading or trailing spaces.
 *
 *  * For example, "Hello World", "HELLO", "hello world hello world" are all
 *    sentences.
 *
 * Words consist of only uppercase and lowercase English letters. Uppercase and
 * lowercase English letters are considered different.
 *
 * A sentence is circular if:
 *
 *  * The last character of a word is equal to the first character of the next
 *    word.
 *  * The last character of the last word is equal to the first character of the
 *    first word.
 *
 * For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats
 * soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode",
 * "Leetcode" and "I like Leetcode" are not circular sentences.
 *
 * Given a string sentence, return true if it is circular. Otherwise, return false.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: sentence = "leetcode exercises sound delightful"
 * Output: true
 * Explanation: The words in sentence are ["leetcode", "exercises", "sound", "delightful"].
 * - leetcode's last character is equal to exercises's first character.
 * - exercises's last character is equal to sound's first character.
 * - sound's last character is equal to delightful's first character.
 * - delightful's last character is equal to leetcode's first character.
 * The sentence is circular.
 *
 * Example 2:
 *
 *
 * Input: sentence = "eetcode"
 * Output: true
 * Explanation: The words in sentence are ["eetcode"].
 * - eetcode's last character is equal to eetcode's first character.
 * The sentence is circular.
 *
 * Example 3:
 *
 *
 * Input: sentence = "Leetcode is cool"
 * Output: false
 * Explanation: The words in sentence are ["Leetcode", "is", "cool"].
 * - Leetcode's last character is not equal to is's first character.
 * The sentence is not circular.
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= sentence.length <= 500
 *  * sentence consist of only lowercase and uppercase English letters and spaces.
 *  * The words in sentence are separated by a single space.
 *  * There are no leading or trailing spaces.
 *
 *
 *
 * https://leetcode.com/problems/circular-sentence
 */

// yields the index of the characters for which the predicate function returned true.
const indexesOf = function* (str, predicateFn) {
  for (let i = 0; i < str.length; i++) {
    if (predicateFn(str[i], i)) {
      yield i;
    }
  }
};

// returns true if the string is equal to an empty space.
const isWhitespace = (char) => char === ' ';

// returns true if the predicateFn returns true for every item in the iterable
const every = (iterable, predicateFn) => {
  for (const value of iterable) {
    if (!predicateFn(value)) {
      return false;
    }
  }
  return true;
};

// returns true if the characters on either side of the index are equal.
const isConnected = (str, index) => str[index - 1] === str[index + 1];

/**
 * @param {string} sentence
 * @return {boolean}
 */
export const isCircularSentence = (sentence) =>
  sentence[0] === sentence.at(-1) &&
  every(indexesOf(sentence, isWhitespace), (x) => isConnected(sentence, x));