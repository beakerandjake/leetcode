/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or
 * false otherwise.
 *
 * In other words, return true if one of s1's permutations is the substring of s2.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Explanation: s2 contains one permutation of s1 ("ba").
 *
 *
 * Example 2:
 *
 *
 * Input: s1 = "ab", s2 = "eidboaoo"
 * Output: false
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s1.length, s2.length <= 104
 *  * s1 and s2 consist of lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/permutation-in-string
 */

const characterCounts = (str) =>
  [...str].reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

const includes = (str, index, characters) => {
  const remaining = new Map(characters);
  let i = index;
  while (i < str.length && remaining.has(str[i])) {
    if (remaining.has(str[i])) {
      remaining.set(str[i], remaining.get(str[i]) - 1);
      if (remaining.get(str[i]) === 0) {
        remaining.delete(str[i]);
      }
    }
    i++;
  }
  return remaining.size === 0;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
export const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) {
    return false;
  }

  const s1Counts = characterCounts(s1);
  const maxI = s2.length - s1.length;
  for (let i = 0; i <= maxI; i++) {
    if (s1Counts.has(s2[i]) && includes(s2, i, s1Counts)) {
      return true;
    }
  }
  return false;
};
