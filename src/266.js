/**
 * Given a string s, return true if a permutation of the string could form a palindrome and false otherwise.
 *
 * Example 1:
 *
 * Input: s = "code"
 * Output: false
 *
 * Example 2:
 *
 * Input: s = "aab"
 * Output: true
 *
 * Example 3:
 *
 * Input: s = "carerac"
 * Output: true
 *
 * Constraints:
 *
 *     1 <= s.length <= 5000
 *     s consists of only lowercase English letters.
 *
 * https://leetcode.com/problems/palindrome-permutation/
 */

const charCounts = (str) =>
  [...str].reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

/**
 * @param {string} s
 * @return {boolean}
 */
export const canPermutePalindrome = (s) => {
  const { odd, even } = [...charCounts(s).values()].reduce(
    (acc, x) => {
      acc[x % 2 === 0 ? 'even' : 'odd'] += 1;
      return acc;
    },
    { odd: 0, even: 0 }
  );
  return (even > 0 && odd <= 1) || odd === 1;
};
