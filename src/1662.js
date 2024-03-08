/**
 * Given two string arrays word1 and word2, return true if the two arrays represent
 * the same string, and false otherwise.
 *
 * A string is represented by an array if the array elements concatenated in order
 * forms the string.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
 * Output: true
 * Explanation:
 * word1 represents string "ab" + "c" -> "abc"
 * word2 represents string "a" + "bc" -> "abc"
 * The strings are the same, so return true.
 *
 * Example 2:
 *
 *
 * Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
 * Output: true
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= word1.length, word2.length <= 103
 *  * 1 <= word1[i].length, word2[i].length <= 103
 *  * 1 <= sum(word1[i].length), sum(word2[i].length) <= 103
 *  * word1[i] and word2[i] consist of lowercase letters.
 *
 *
 *
 * https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent
 */

const simple = (() => {
  const concat = (chars) => chars.join('');
  return (a, b) => concat(a) === concat(b);
})();

/**
 * @param {string[]} a
 * @param {string[]} b
 * @return {boolean}
 */
export const arrayStringsAreEqual = (a, b) => {
  const check = (aWord, aLetter, bWord, bLetter) => {
    if (aWord >= a.length) {
      return bWord >= b.length;
    }
    if (bWord >= b.length) {
      return aWord >= a.length;
    }

    if (aLetter >= a[aWord].length) {
      return bLetter < b[bWord].length
        ? check(aWord + 1, 0, bWord, bLetter)
        : check(aWord + 1, 0, bWord + 1, 0);
    }
    if (bLetter >= b[bWord].length) {
      return aLetter < a[aWord].length
        ? check(aWord, aLetter, bWord + 1, 0)
        : check(aWord + 1, 0, bWord + 1, 0);
    }

    if (a[aWord][aLetter] !== b[bWord][bLetter]) {
      return false;
    }

    return check(aWord, aLetter + 1, bWord, bLetter + 1);
  };
  return check(0, 0, 0, 0);
};
