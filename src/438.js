/**
 * Given two strings s and p, return an array of all the start indices of p's
 * anagrams in s. You may return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different
 * word or phrase, typically using all the original letters exactly once.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0,6]
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "abab", p = "ab"
 * Output: [0,1,2]
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length, p.length <= 3 * 104
 *  * s and p consist of lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/find-all-anagrams-in-a-string
 */

const bruteForce = (() => {
  const hash = (str) => [...str].sort((a, b) => a.localeCompare(b)).join('');

  return (s, p) => {
    const result = [];
    const pHash = hash(p);
    const pLen = p.length;
    const pLookup = new Set(p);
    for (let i = 0; i <= s.length - pLen; i++) {
      if (!pLookup.has(s[i])) {
        continue;
      }
      if (hash(s.slice(i, i + pLen)) === pHash) {
        result.push(i);
      }
    }
    return result;
  };
})();

const usingSlidingWindow = (() => {
  const charCounts = (str) =>
    [...str].reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

  const equals = (a, b) => {
    if (a.size !== b.size) {
      return false;
    }
    for (const [k, v] of a.entries()) {
      if (!b.has(k) || b.get(k) !== v) {
        return false;
      }
    }
    return true;
  };

  return (s, p) => {
    if (p.length > s.length) {
      return [];
    }
    const result = [];
    const pChars = charCounts(p);
    const sChars = new Map();
    for (let i = 0; i < s.length; i++) {
      // expand right
      sChars.set(s[i], (sChars.get(s[i]) || 0) + 1);
      // shrink left
      if (i >= p.length) {
        const leftChar = s[i - p.length];
        sChars.set(leftChar, (sChars.get(leftChar) || 0) - 1);
        if (sChars.get(leftChar) <= 0) {
          sChars.delete(leftChar);
        }
      }
      // see if window is a palindrome of p
      if (equals(pChars, sChars)) {
        result.push(i - p.length + 1);
      }
    }
    return result;
  };
})();

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
export const findAnagrams = usingSlidingWindow;
