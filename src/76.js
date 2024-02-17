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

// returns a map which maps a character to the number of times it occurs in the string.
const frequencyMap = (str) =>
  [...str].reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

// returns a copy of the map with all values set to zero.
const zeroMap = (map) => {
  const empty = new Map();
  for (const key of map.keys()) {
    empty.set(key, 0);
  }
  return empty;
};

// returns true if a includes every key of b and every value of a is >= every value of b.
const covers = (aMap, bMap) => {
  for (const [key, value] of aMap) {
    if (!bMap.has(key) || bMap.get(key) > value) {
      return false;
    }
  }
  return true;
};

// expands the index rightward until all characters in the target map have been found.
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

// contracts the index leftward until all characters in the target map are no longer present.
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

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
export const minWindow = (s, t) => {
  const tMap = frequencyMap(t);
  let start = 0;
  let end = 0;
  let counts = zeroMap(tMap);
  let best = null;
  // continually expand and contract two pointers searching for the smallest substring.
  for (;;) {
    // expand as far right as possible until the substring contains t.
    const right = expandRight(s, end, counts, tMap);
    // if not covered after expanding right then s is exhausted and no substring contains t.
    if (!covers(right.counts, tMap)) {
      break;
    }
    // contract left until no substring no longer contains t.
    const left = contractLeft(s, start, right.counts, tMap);
    // check if the last valid substring is shorter than the previous best.
    if (!best || right.end - (left.start - 1) < best.end - best.start) {
      best = { end: right.end, start: left.start - 1 };
    }
    start = left.start;
    end = right.end;
    counts = left.counts;
  }
  return best ? s.slice(best.start, best.end) : '';
};
