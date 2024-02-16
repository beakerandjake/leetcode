/**
 * Given two strings s and t of lengths m and n respectively, return the minimum
 * window substring of s such that every character in t (including duplicates) is
 * included in the window. If there is no such substring, return the empty string
 * "".
 *
 * The testcases will be generated such that the answer is unique.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "a", t = "a"
 * Output: "a"
 * Explanation: The entire string s is the minimum window.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "a", t = "aa"
 * Output: ""
 * Explanation: Both 'a's from t must be included in the window.
 * Since the largest window of s only has one 'a', return empty string.
 *
 *
 *
 *
 * Constraints:
 *
 *  * m == s.length
 *  * n == t.length
 *  * 1 <= m, n <= 105
 *  * s and t consist of uppercase and lowercase English letters.
 *
 *
 *
 * Follow up: Could you find an algorithm that runs in O(m + n) time?
 *
 *
 *
 * https://leetcode.com/problems/minimum-window-substring
 */

const frequencyMap = (str) =>
  [...str].reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

const emptyCounts = (map) => {
  const empty = new Map();
  for (const key of map.keys()) {
    empty.set(key, 0);
  }
  return empty;
};

const covers = (aMap, bMap) => {
  for (const [key, value] of aMap) {
    if (!bMap.has(key) || bMap.get(key) > value) {
      return false;
    }
  }
  return true;
};

const expandRight = (str, start, counts, target) => {
  const newCounts = new Map(counts);
  let i = start;
  while (i < str.length && !covers(newCounts, target)) {
    if (target.has(str[i])) {
      newCounts.set(str[i], newCounts.get(str[i]) + 1);
    }
    i++;
  }
  return { end: i, counts: newCounts };
};

const contractLeft = (str, start, counts, target) => {
  const newCounts = counts;
  let i = start;
  while (i < str.length && covers(newCounts, target)) {
    if (target.has(str[i])) {
      newCounts.set(str[i], newCounts.get(str[i]) - 1);
    }
    i++;
  }
  return { start: i, counts: newCounts };
};

const beatsBest = (start, end, best) => !best || end - start < best.end - best.start;

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
export const minWindow = (s, t) => {
  const tMap = frequencyMap(t);
  let start = 0;
  let end = 0;
  let counts = emptyCounts(tMap);
  let best = null;
  for (;;) {
    const right = expandRight(s, end, counts, tMap);
    if (!covers(right.counts, tMap)) {
      break;
    }
    const left = contractLeft(s, start, right.counts, tMap);
    if (beatsBest(left.start - 1, right.end, best)) {
      best = { end: right.end, start: left.start - 1 };
    }
    start = left.start;
    end = right.end;
    counts = left.counts;
  }
  return best ? s.slice(best.start, best.end) : '';
};
