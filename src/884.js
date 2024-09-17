/**
 * A sentence is a string of single-space separated words where each word consists
 * only of lowercase letters.
 *
 * A word is uncommon if it appears exactly once in one of the sentences, and does
 * not appear in the other sentence.
 *
 * Given two sentences s1 and s2, return a list of all the uncommon words. You may
 * return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: s1 = "this apple is sweet", s2 = "this apple is sour"
 *
 * Output: ["sweet","sour"]
 *
 * Explanation:
 *
 * The word "sweet" appears only in s1, while the word "sour" appears only in s2.
 *
 * Example 2:
 *
 * Input: s1 = "apple apple", s2 = "banana"
 *
 * Output: ["banana"]
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s1.length, s2.length <= 200
 *  * s1 and s2 consist of lowercase English letters and spaces.
 *  * s1 and s2 do not have leading or trailing spaces.
 *  * All the words in s1 and s2 are separated by a single space.
 *
 *
 *
 * https://leetcode.com/problems/uncommon-words-from-two-sentences
 */

// returns an array containing all of the words of the sentence.
const words = (sentence) => sentence.split(' ');

// maps each item of the array to the number of times it occurs.
const frequencyMap = (arr) =>
  arr.reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

// returns all of the keys of the map which satisfy the filter predicate.
const filterKeys = (m, predicateFn) => {
  const result = [];
  for (const [k, v] of m) {
    if (predicateFn(k, v)) {
      result.push(k);
    }
  }
  return result;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
export const uncommonFromSentences = (s1, s2) =>
  filterKeys(frequencyMap([...words(s1), ...words(s2)]), (_, v) => v === 1);
