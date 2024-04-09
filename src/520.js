/**
 * We define the usage of capitals in a word to be right when one of the following
 * cases holds:
 *
 *  * All letters in this word are capitals, like "USA".
 *  * All letters in this word are not capitals, like "leetcode".
 *  * Only the first letter in this word is capital, like "Google".
 *
 * Given a string word, return true if the usage of capitals in it is right.
 *
 *
 *
 * Example 1:
 *
 * Input: word = "USA"
 * Output: true
 *
 *
 * Example 2:
 *
 * Input: word = "FlaG"
 * Output: false
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= word.length <= 100
 *  * word consists of lowercase and uppercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/detect-capital
 */

const isUpperCase = (word) => /^[A-Z]+$/.test(word);

const isLowerCase = (word) => /^[a-z]+$/.test(word);

const isCapitalCase = (word) => /^[A-Z][a-z]*$/.test(word);

const rules = [isUpperCase, isLowerCase, isCapitalCase];

/**
 * @param {string} word
 * @return {boolean}
 */
export const detectCapitalUse = (word) => rules.some((ruleFn) => ruleFn(word));
