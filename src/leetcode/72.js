/**
 * Given two strings word1 and word2, return the minimum number of operations
 * required to convert word1 to word2.
 *
 * You have the following three operations permitted on a word:
 *
 *  * Insert a character
 *  * Delete a character
 *  * Replace a character
 *
 *
 *
 * Example 1:
 *
 *
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation:
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 *
 *
 * Example 2:
 *
 *
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation:
 * intention -> inention (remove 't')
 * inention -> enention (replace 'i' with 'e')
 * enention -> exention (replace 'n' with 'x')
 * exention -> exection (replace 'n' with 'c')
 * exection -> execution (insert 'u')
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= word1.length, word2.length <= 500
 *  * word1 and word2 consist of lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/edit-distance
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
export const minDistance = (word1, word2) => {
  const m = word2.length + 1;
  const n = word1.length + 1;
  const dp = [...Array(m)].map(() => Array(n).fill(0));
  for (let y = 0; y < m; y++) {
    dp[y][0] = y;
  }
  for (let x = 0; x < n; x++) {
    dp[0][x] = x;
  }
  for (let y = 1; y < m; y++) {
    for (let x = 1; x < n; x++) {
      const cost = word2[y - 1] === word1[x - 1] ? 0 : 1;
      dp[y][x] = Math.min(dp[y - 1][x] + 1, dp[y][x - 1] + 1, dp[y - 1][x - 1] + cost);
    }
  }
  return dp[word2.length][word1.length];
};
