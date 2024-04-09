/**
 * Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1
 * and s2.
 *
 * An interleaving of two strings s and t is a configuration where s and t are
 * divided into n and m substrings respectively, such that:
 *
 *  * s = s1 + s2 + ... + sn
 *  * t = t1 + t2 + ... + tm
 *  * |n - m| <= 1
 *  * The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 +
 *    t3 + s3 + ...
 *
 * Note: a + b is the concatenation of strings a and b.
 *
 *
 *
 * Example 1:
 *
 * [https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg]
 *
 *
 * Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
 * Output: true
 * Explanation: One way to obtain s3 is:
 * Split s1 into s1 = "aa" + "bc" + "c", and s2 into s2 = "dbbc" + "a".
 * Interleaving the two splits, we get "aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac".
 * Since s3 can be obtained by interleaving s1 and s2, we return true.
 *
 *
 * Example 2:
 *
 *
 * Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
 * Output: false
 * Explanation: Notice how it is impossible to interleave s2 with any other string to obtain s3.
 *
 *
 * Example 3:
 *
 *
 * Input: s1 = "", s2 = "", s3 = ""
 * Output: true
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= s1.length, s2.length <= 100
 *  * 0 <= s3.length <= 200
 *  * s1, s2, and s3 consist of lowercase English letters.
 *
 *
 *
 * Follow up: Could you solve it using only O(s2.length) additional memory space?
 *
 *
 *
 * https://leetcode.com/problems/interleaving-string
 */

const bruteForce = (s1, s2, s3) => {
  const dp = (aIndex, bIndex, result) => {
    if (aIndex > s1.length || bIndex > s2.length) {
      return false;
    }
    if (aIndex === s1.length && bIndex === s2.length) {
      return result === s3;
    }
    return (
      dp(aIndex + 1, bIndex, result + s1[aIndex]) ||
      dp(aIndex, bIndex + 1, result + s2[bIndex])
    );
  };
  return dp(0, 0, '');
};

const usingMemoization = (s1, s2, s3) => {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  const memo = [...Array(s1.length + 1)].map(() => Array(s2.length + 1).fill(null));
  const dp = (aIndex, bIndex) => {
    if (aIndex > s1.length || bIndex > s2.length) {
      return false;
    }
    if (aIndex === s1.length && bIndex === s2.length) {
      return true;
    }
    if (memo[aIndex][bIndex] == null) {
      const aResult = s1[aIndex] === s3[aIndex + bIndex] ? dp(aIndex + 1, bIndex) : false;
      const bResult = s2[bIndex] === s3[aIndex + bIndex] ? dp(aIndex, bIndex + 1) : false;
      memo[aIndex][bIndex] = aResult || bResult;
    }
    return memo[aIndex][bIndex];
  };
  return dp(0, 0);
};

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
export const isInterleave = usingMemoization;
