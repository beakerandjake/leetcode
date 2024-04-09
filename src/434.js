/**
 * Given a string s, return the number of segments in the string.
 *
 * A segment is defined to be a contiguous sequence of non-space characters.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "Hello, my name is John"
 * Output: 5
 * Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
 *
 *
 * Example 2:
 *
 *
 * Input: s = "Hello"
 * Output: 1
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= s.length <= 300
 *  * s consists of lowercase and uppercase English letters, digits, or one of the
 *    following characters "!@#$%^&*()_+-=',.:".
 *  * The only space character in s is ' '.
 *
 *
 *
 * https://leetcode.com/problems/number-of-segments-in-a-string
 */

/**
 * @param {string} s
 * @return {number}
 */
export const countSegments = (s) => {
  const trimmed = s.trim();
  return trimmed.length ? trimmed.split(/\s+/).length : 0;
};
