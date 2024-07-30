/**
 * You are given a string s consisting only of characters 'a' and 'b' .
 *
 * You can delete any number of characters in s to make s balanced. s is balanced
 * if there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]=
 * 'a'.
 *
 * Return the minimum number of deletions needed to make s balanced.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "aababbab"
 * Output: 2
 * Explanation: You can either:
 * Delete the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
 * Delete the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").
 *
 *
 * Example 2:
 *
 *
 * Input: s = "bbaaaaabb"
 * Output: 2
 * Explanation: The only solution is to delete the first two characters.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 105
 *  * s[i] is 'a' or 'b' .
 *
 *
 *
 * https://leetcode.com/problems/minimum-deletions-to-make-string-balanced
 */

/**
 * @param {string} s
 * @return {number}
 */
export const minimumDeletions = (s) => {
  const memo = [...Array(s.length)].map(() => Array(2).fill(null));
  const dp = (index, bPrev) => {
    if (index >= s.length) {
      return 0;
    }
    if (memo[index][bPrev] == null) {
      let result;
      if (s[index] === 'a') {
        // must delete this char if already encountered a 'b'.
        result = bPrev ? 1 + dp(index + 1, bPrev) : dp(index + 1, 0);
      } else {
        // if current is a 'b', can either delete or keep it.
        result = Math.min(1 + dp(index + 1, bPrev), dp(index + 1, 1));
      }
      memo[index][bPrev] = result;
    }
    return memo[index][bPrev];
  };

  return dp(0, 0);
};
