/**
 * Given a string s and a dictionary of strings wordDict, add spaces in s to
 * construct a sentence where each word is a valid dictionary word. Return all such
 * possible sentences in any order.
 *
 * Note that the same word in the dictionary may be reused multiple times in the
 * segmentation.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
 * Output: ["cats and dog","cat sand dog"]
 *
 *
 * Example 2:
 *
 *
 * Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
 * Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
 * Explanation: Note that you are allowed to reuse a dictionary word.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
 * Output: []
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 20
 *  * 1 <= wordDict.length <= 1000
 *  * 1 <= wordDict[i].length <= 10
 *  * s and wordDict[i] consist of only lowercase English letters.
 *  * All the strings of wordDict are unique.
 *  * Input is generated in a way that the length of the answer doesn't exceed 105.
 *
 *
 *
 * https://leetcode.com/problems/word-break-ii
 */

// returns the number of characters in the sentence.
const length = (sentence) => sentence.reduce((acc, word) => acc + word.length, 0);

/**
 * @param {string} str
 * @param {string[]} words
 * @return {string[]}
 */
export const wordBreak = (str, words) => {
  const wordLookup = new Set(words);
  const result = [];
  const backtrack = (pStart, index, sentence) => {
    if (index >= str.length) {
      // only use sentence if consumed the entire input string.
      if (length(sentence) === str.length) {
        result.push(sentence.join(' '));
      }
      return;
    }
    const word = str.slice(pStart, index + 1);
    // attempt to partition here if the current word is valid.
    if (wordLookup.has(word)) {
      sentence.push(word);
      backtrack(index + 1, index + 1, sentence);
      sentence.pop();
    }
    // skip this word
    backtrack(pStart, index + 1, sentence);
  };
  backtrack(0, 0, []);
  return result;
};
