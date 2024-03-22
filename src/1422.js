/**
 * Given a string s of zeros and ones, return the maximum score after splitting the
 * string into two non-empty substrings (i.e. left substring and right substring).
 *
 * The score after splitting a string is the number of zeros in the left substring
 * plus the number of ones in the right substring.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "011101"
 * Output: 5
 * Explanation:
 * All possible ways of splitting s into two non-empty substrings are:
 * left = "0" and right = "11101", score = 1 + 4 = 5
 * left = "01" and right = "1101", score = 1 + 3 = 4
 * left = "011" and right = "101", score = 1 + 2 = 3
 * left = "0111" and right = "01", score = 1 + 1 = 2
 * left = "01110" and right = "1", score = 2 + 1 = 3
 *
 *
 * Example 2:
 *
 *
 * Input: s = "00111"
 * Output: 5
 * Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
 *
 *
 * Example 3:
 *
 *
 * Input: s = "1111"
 * Output: 3
 *
 *
 *
 *
 * Constraints:
 *
 *  * 2 <= s.length <= 500
 *  * The string s consists of characters '0' and '1' only.
 *
 *
 *
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string
 */

const split = (s, index, hasSplit, zeros, ones) => {
  if (index >= s.length) {
    // if haven't split then result is invalid, we are required to have split somewhere.
    return hasSplit ? zeros + ones : 0;
  }

  // if have already split, can only continue the split.
  if (hasSplit) {
    return split(s, index + 1, true, zeros, s[index] === '1' ? ones + 1 : ones);
  }

  // either start a new split at this index, or don't.
  return Math.max(
    split(s, index + 1, true, zeros, s[index] === '1' ? 1 : 0),
    split(s, index + 1, false, s[index] === '0' ? zeros + 1 : zeros, 0)
  );
};

/**
 * @param {string} s
 * @return {number}
 */
export const maxScore = (s) => split(s, 1, false, s?.at(0) === '0' ? 1 : 0, 0);
