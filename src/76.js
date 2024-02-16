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

const increaseCount = (map, key) => {
  const copy = new Map(map);
  copy.set(key, (copy.get(key) || 0) + 1);
  return copy;
};

const decreaseCount = (map, key) => {
  const copy = new Map(map);
  copy.set(key, (copy.get(key) || 0) - 1);
  return copy;
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
  let newCounts = counts;
  let i = start;
  while (i < str.length && !covers(newCounts, target)) {
    if (target.has(str[i])) {
      newCounts = increaseCount(newCounts, str[i]);
    }
    i++;
  }
  return { end: i, counts: newCounts };
};

const contractLeft = (str, start, counts, target) => {
  const contractions = [];
  let newCounts = counts;
  let i = start;
  while (i < str.length && covers(newCounts, target)) {
    if (target.has(str[i])) {
      newCounts = decreaseCount(newCounts, str[i]);
    }
    i++;
    contractions.push({ start: i, counts: newCounts });
  }
  return contractions;
};

const length = ({ start, end }) => end - start;

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
export const minWindow = (s, t) => {
  const tMap = frequencyMap(t);
  const history = [{ start: 0, end: 0, counts: emptyCounts(tMap) }];

  let i = 0;
  for (;;) {
    const previous = history.at(-1);
    const right = expandRight(s, previous.end, previous.counts, tMap);
    history.push({ start: previous.start, end: right.end, counts: right.counts });
    if (!covers(right.counts, tMap)) {
      break;
    }
    const contractions = contractLeft(s, previous.start, right.counts, tMap);
    history.push(
      ...contractions.map((contraction) => ({ ...contraction, end: right.end }))
    );
    i++;
  }

  const substrings = history.filter(({ counts }) => covers(counts, tMap));
  if (!substrings.length) {
    return '';
  }
  const sorted = substrings.sort((a, b) => length(a) - length(b));
  return s.slice(sorted[0].start, sorted[0].end);
};
