/**
 * Given two strings s and t, return true if they are both one edit distance apart,
 * otherwise return false.
 *
 * A string s is said to be one distance apart from a string t if you can:
 *
 *  * Insert exactly one character into s to get t.
 *  * Delete exactly one character from s to get t.
 *  * Replace exactly one character of s with a different character to get t.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "ab", t = "acb"
 * Output: true
 * Explanation: We can insert 'c' into s to get t.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "", t = ""
 * Output: false
 * Explanation: We cannot get t from s by only one step.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= s.length, t.length <= 104
 *  * s and t consist of lowercase letters, uppercase letters, and digits.
 *
 *
 *
 * https://leetcode.com/problems/one-edit-distance
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isOneEditDistance = (s, t) => {
  // reject any strings which can never be transformed
  if (s === t || Math.abs(s.length - t.length) > 1) {
    return false;
  }

  const recurse = (sIndex, tIndex, edits) => {
    if (edits < 0) {
      return false;
    }

    if (sIndex >= s.length) {
      // see if enough edits left to handle remaining t chars (if any)
      return t.length - tIndex <= edits;
    }

    if (tIndex >= t.length) {
      // see if enough edits left to handle remaining s chars (if any)
      return s.length - sIndex <= edits;
    }

    // no need to edit if same character
    if (s[sIndex] === t[tIndex]) {
      return recurse(sIndex + 1, tIndex + 1, edits);
    }

    return (
      // delete the current s char
      recurse(sIndex + 1, tIndex, edits - 1) ||
      // add the current t char to s
      recurse(sIndex, tIndex + 1, edits - 1) ||
      // change the current s char to the t char
      recurse(sIndex + 1, tIndex + 1, edits - 1)
    );
  };

  return recurse(0, 0, 1);
};
