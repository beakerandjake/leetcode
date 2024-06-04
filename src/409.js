/**
 * Given a string s which consists of lowercase or uppercase letters, return the
 * length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abccccdd"
 * Output: 7
 * Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "a"
 * Output: 1
 * Explanation: The longest palindrome that can be built is "a", whose length is 1.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 2000
 *  * s consists of lowercase and/or uppercase English letters only.
 *
 *
 *
 * https://leetcode.com/problems/longest-palindrome
 */

const frequencyMap = (str) =>
  [...str].reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

const maxChar = (map) => {
  let maxKey;
  let maxValue = 0;
  for (const [k, v] of map.entries()) {
    if (v > maxValue) {
      maxKey = k;
      maxValue = v;
    }
  }
  return maxKey;
};

/**
 * @param {string} str
 * @return {number}
 */
export const longestPalindrome = (str) => {
  let result = 0;
  const charCounts = frequencyMap(str);

  // use all of the chars with an even count.
  for (const [k, v] of charCounts.entries()) {
    if (v % 2 === 0) {
      result += v;
      charCounts.delete(k);
    }
  }

  // use the char with the maximum odd count
  if (charCounts.size) {
    const maxOddChar = maxChar(charCounts);
    result += charCounts.get(maxOddChar);
    charCounts.delete(maxOddChar);
  }

  // use any remaining odd chars
  for (const count of charCounts.values()) {
    // don't use all instances of the char because that would break palindrome
    if (count >= 3) {
      result += count - 1;
    }
  }

  return result;
};
