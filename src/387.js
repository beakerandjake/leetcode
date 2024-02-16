/**
 * Given a string s, find the first non-repeating character in it and return its
 * index. If it does not exist, return -1.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "leetcode"
 * Output: 0
 *
 *
 * Example 2:
 *
 * Input: s = "loveleetcode"
 * Output: 2
 *
 *
 * Example 3:
 *
 * Input: s = "aabb"
 * Output: -1
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 105
 *  * s consists of only lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string
 */

const frequencyMap = (str) =>
  [...str].reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

/**
 * @param {string} s
 * @return {number}
 */
export const firstUniqChar = (s) => {
  const charCounts = frequencyMap(s);
  for (let i = 0; i < s.length; i++) {
    if (charCounts.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
