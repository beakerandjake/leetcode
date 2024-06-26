/**
 * You are given a string s and an array of strings words. All the strings of words
 * are of the same length.
 *
 * A concatenated substring in s is a substring that contains all the strings of
 * any permutation of words concatenated.
 *
 *  * For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef",
 *    "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is
 *    not a concatenated substring because it is not the concatenation of any
 *    permutation of words.
 *
 * Return the starting indices of all the concatenated substrings in s. You can
 * return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "barfoothefoobarman", words = ["foo","bar"]
 * Output: [0,9]
 * Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
 * The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
 * The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
 * The output order does not matter. Returning [9,0] is fine too.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
 * Output: []
 * Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
 * There is no substring of length 16 in s that is equal to the concatenation of any permutation of words.
 * We return an empty array.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
 * Output: [6,9,12]
 * Explanation: Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.
 * The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"] which is a permutation of words.
 * The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"] which is a permutation of words.
 * The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"] which is a permutation of words.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 104
 *  * 1 <= words.length <= 5000
 *  * 1 <= words[i].length <= 30
 *  * s and words[i] consist of lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words
 */

const bruteForce = (() => {
  const frequencyCounts = (arr) =>
    arr.reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

  const isPermutation = (str, startIndex, words) => {
    const remaining = frequencyCounts(words);
    const wordSize = words[0].length;
    const subStringSize = wordSize * words.length;
    let wordsUsed = 0;
    for (let i = startIndex; i < startIndex + subStringSize; i += wordSize) {
      const slice = str.slice(i, i + wordSize);
      if (!remaining.has(slice) || remaining.get(slice) <= 0) {
        return false;
      }
      remaining.set(slice, (remaining.get(slice) || 0) - 1);
      wordsUsed++;
    }
    return wordsUsed === words.length;
  };

  return (s, words) => {
    const results = [];
    const windowSize = words[0].length;
    for (let i = 0; i <= s.length - windowSize; i++) {
      if (isPermutation(s, i, words)) {
        results.push(i);
      }
    }
    return results;
  };
})();

const usingSlidingWindow = (() => {
  // returns a new map which maps each element in the array to the number of times it occurs.
  const frequencyCounts = (arr) =>
    arr.reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

  // returns true if the two maps are equal
  const mapsAreEqual = (a, b) => {
    if (!a && !b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    if (a.size !== b.size) {
      return false;
    }
    for (const [key, value] of a.entries()) {
      if (!b.has(key) || b.get(key) !== value) {
        return false;
      }
    }
    return true;
  };

  return (str, words) => {
    const result = [];
    const lenWord = words[0].length;
    const lenSubstr = lenWord * words.length;
    const leftMax = str.length - lenSubstr;
    const requiredWords = frequencyCounts(words);

    for (let left = 0; left < lenWord; left++) {
      // expand right one word at a time until formed substring of required length.
      const windowWords = new Map();
      for (let i = 0; i < words.length; i++) {
        const word = str.slice(left + i * lenWord, left + i * lenWord + lenWord);
        windowWords.set(word, (windowWords.get(word) || 0) + 1);
      }
      if (mapsAreEqual(requiredWords, windowWords)) {
        result.push(left);
      }
      // now expand and contract window until reached end of the string.
      for (let lNext = left + lenWord; lNext <= leftMax; lNext += lenWord) {
        // shrink window from left by one word
        const leftWord = str.slice(lNext - lenWord, lNext);
        windowWords.set(leftWord, windowWords.get(leftWord) - 1);
        if (windowWords.get(leftWord) === 0) {
          windowWords.delete(leftWord);
        }
        // expand window right by one word
        const rightWord = str.slice(lNext + lenSubstr - lenWord, lNext + lenSubstr);
        windowWords.set(rightWord, (windowWords.get(rightWord) || 0) + 1);

        if (mapsAreEqual(requiredWords, windowWords)) {
          result.push(lNext);
        }
      }
    }
    return result;
  };
})();

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
export const findSubstring = usingSlidingWindow;
