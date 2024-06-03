/**
 * You are given two strings s and t consisting of only lowercase English letters.
 *
 * Return the minimum number of characters that need to be appended to the end of s
 * so that t becomes a subsequence of s.
 *
 * A subsequence is a string that can be derived from another string by deleting
 * some or no characters without changing the order of the remaining characters.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "coaching", t = "coding"
 * Output: 4
 * Explanation: Append the characters "ding" to the end of s so that s = "coachingding".
 * Now, t is a subsequence of s ("coachingding").
 * It can be shown that appending any 3 characters to the end of s will never make t a subsequence.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "abcde", t = "a"
 * Output: 0
 * Explanation: t is already a subsequence of s ("abcde").
 *
 *
 * Example 3:
 *
 *
 * Input: s = "z", t = "abcde"
 * Output: 5
 * Explanation: Append the characters "abcde" to the end of s so that s = "zabcde".
 * Now, t is a subsequence of s ("zabcde").
 * It can be shown that appending any 4 characters to the end of s will never make t a subsequence.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length, t.length <= 105
 *  * s and t consist only of lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/append-characters-to-string-to-make-subsequence
 */

const bruteForce = (() => {
  const consume = (source, sourceIndex, target, targetIndex) => {
    if (sourceIndex >= source.length || targetIndex >= target.length) {
      return 0;
    }
    return source[sourceIndex] === target[targetIndex]
      ? 1 + consume(source, sourceIndex + 1, target, targetIndex + 1)
      : consume(source, sourceIndex + 1, target, targetIndex);
  };

  return (s, t) => {
    let max = 0;
    let i = 0;
    while (i < s.length) {
      let consumed = 1;
      if (s[i] === t[0]) {
        const subsequenceLength = consume(s, i, t, 0);
        max = Math.max(max, subsequenceLength);
        consumed = Math.max(consumed, subsequenceLength);
      }
      i += consumed;
    }
    return t.length - max;
  };
})();

const usingTwoPointers = (source, target) => {
  let sIndex = 0;
  let tIndex = 0;
  while (sIndex < source.length && tIndex < target.length) {
    if (source[sIndex] === target[tIndex]) {
      tIndex++;
    }
    sIndex++;
  }
  return target.length - tIndex;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
export const appendCharacters = usingTwoPointers;
