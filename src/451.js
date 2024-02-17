/**
 * Given a string s, sort it in decreasing order based on the frequency of the
 * characters. The frequency of a character is the number of times it appears in
 * the string.
 *
 * Return the sorted string. If there are multiple answers, return any of them.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "tree"
 * Output: "eert"
 * Explanation: 'e' appears twice while 'r' and 't' both appear once.
 * So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cccaaa"
 * Output: "aaaccc"
 * Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
 * Note that "cacaca" is incorrect, as the same characters must be together.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "Aabb"
 * Output: "bbAa"
 * Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
 * Note that 'A' and 'a' are treated as two different characters.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 5 * 105
 *  * s consists of uppercase and lowercase English letters and digits.
 *
 *
 *
 * https://leetcode.com/problems/sort-characters-by-frequency
 */

// returns a dictionary mapping each character to the number of times it occurs in the string.
const frequencyMap = (str) =>
  [...str].reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

// converts the frequency map to an array of { character, count }
const toCountArray = (map) =>
  [...map.entries()].map(([k, v]) => ({ character: k, count: v }));

// returns a new count array sorted by character count (descending)
const sortByCounts = (countArray) => [...countArray].sort((a, b) => b.count - a.count);

/**
 * @param {string} s
 * @return {string}
 */
export const frequencySort = (s) =>
  sortByCounts(toCountArray(frequencyMap(s)))
    .map(({ character, count }) => character.repeat(count))
    .join('');
