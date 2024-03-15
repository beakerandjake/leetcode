/**
 * Given a string s consisting only of characters 'a', 'b', and 'c'. You are asked
 * to apply the following algorithm on the string any number of times:
 *
 *  1. Pick a non-empty prefix from the string s where all the characters in the
 *     prefix are equal.
 *  2. Pick a non-empty suffix from the string s where all the characters in this
 *     suffix are equal.
 *  3. The prefix and the suffix should not intersect at any index.
 *  4. The characters from the prefix and suffix must be the same.
 *  5. Delete both the prefix and the suffix.
 *
 * Return the minimum length of s after performing the above operation any number
 * of times (possibly zero times).
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "ca"
 * Output: 2
 * Explanation: You can't remove any characters, so the string stays as is.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cabaabac"
 * Output: 0
 * Explanation: An optimal sequence of operations is:
 * - Take prefix = "c" and suffix = "c" and remove them, s = "abaaba".
 * - Take prefix = "a" and suffix = "a" and remove them, s = "baab".
 * - Take prefix = "b" and suffix = "b" and remove them, s = "aa".
 * - Take prefix = "a" and suffix = "a" and remove them, s = "".
 *
 * Example 3:
 *
 *
 * Input: s = "aabccabba"
 * Output: 3
 * Explanation: An optimal sequence of operations is:
 * - Take prefix = "aa" and suffix = "a" and remove them, s = "bccabb".
 * - Take prefix = "b" and suffix = "bb" and remove them, s = "cca".
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 105
 *  * s only consists of characters 'a', 'b', and 'c'.
 *
 *
 *
 * https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends
 */

const simple = (() => {
  const trimEnd = (s, char) => {
    if (!s?.length) {
      return '';
    }
    return s.at(-1) === char ? trimEnd(s.slice(0, -1), char) : s;
  };

  const trimStart = (s, char) => {
    if (!s?.length) {
      return '';
    }
    return s.at(0) === char ? trimStart(s.slice(1), char) : s;
  };

  const minimumLength = (s) => {
    if (!s || s.length <= 1) {
      return s?.length || 0;
    }
    if (s.at(0) !== s.at(-1)) {
      return s.length;
    }
    return minimumLength(trimEnd(trimStart(s, s.at(0)), s.at(0)));
  };

  return minimumLength;
})();

const inPlace = (() => {
  const trimLeft = (str, target, index) => {
    if (index >= str.length) {
      return index;
    }
    return str[index] === target ? trimLeft(str, target, index + 1) : index;
  };

  const trimRight = (str, target, index) => {
    if (index < 0) {
      return index;
    }
    return str[index] === target ? trimRight(str, target, index - 1) : index;
  };

  const minimum = (str, left, right) => {
    if (left > right) {
      return 0;
    }
    if (left === right) {
      return 1;
    }
    if (str.at(left) !== str.at(right)) {
      return right - left + 1;
    }
    return minimum(
      str,
      trimLeft(str, str.at(left), left),
      trimRight(str, str.at(right), right)
    );
  };

  return (str) => minimum(str, 0, str.length - 1);
})();

/**
 * @param {string} s
 * @return {number}
 */
export const minimumLength = inPlace;
