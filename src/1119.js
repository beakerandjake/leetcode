/**
 * Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

 * Example 1:
 * 
 * Input: s = "leetcodeisacommunityforcoders"
 * Output: "ltcdscmmntyfrcdrs"
 * 
 * Example 2:
 * 
 * Input: s = "aeiou"
 * Output: ""
 * 
 * Constraints:
 * 
 *     1 <= s.length <= 1000
 *     s consists of only lowercase English letters.
 * 
 * https://leetcode.com/problems/remove-vowels-from-a-string/description/
 */

/**
 * @param {string} s
 * @return {string}
 */
export const removeVowels = (s) => s.replace(/[aeiou]/g, '');
