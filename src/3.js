/**
 * Given a string s, find the length of the longest substring without repeating
 * characters.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= s.length <= 5 * 104
 *  * s consists of English letters, digits, symbols and spaces.
 *
 *
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters
 */

/**
 * @param {string} str
 * @return {number}
 */
export const lengthOfLongestSubstring = (str) => {
  let longest = 0;
  let left = 0;
  let right = 0;
  const visited = new Set();
  while (right < str.length) {
    // expand right until duplicate character
    while (right < str.length && !visited.has(str[right])) {
      visited.add(str[right]);
      right++;
    }
    // store the current streak
    longest = Math.max(longest, visited.size);
    // shrink left until no more duplicates
    while (left < right && visited.has(str[right])) {
      visited.delete(str[left]);
      left++;
    }
  }
  return longest;
};
