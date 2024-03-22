/**
 * You are given an array of strings words and a string chars.
 *
 * A string is good if it can be formed by characters from chars (each character
 * can only be used once).
 *
 * Return the sum of lengths of all good strings in words.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: words = ["cat","bt","hat","tree"], chars = "atach"
 * Output: 6
 * Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
 *
 *
 * Example 2:
 *
 *
 * Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
 * Output: 10
 * Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= words.length <= 1000
 *  * 1 <= words[i].length, chars.length <= 100
 *  * words[i] and chars consist of lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters
 */

// returns the sum of all numbers in the array.
const sum = (arr) => arr.reduce((acc, x) => acc + x, 0);

// maps each char of the string to the number of times it occurs.
const charCounts = (str) =>
  [...str].reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

// returns true if:
//  - every key of a is present in b
//  - the value of every key in a is gte the value of b.
const overlaps = (a, b) => {
  if (!a.size) {
    return false;
  }
  if (!b.size) {
    return false;
  }

  for (const [char, count] of a.entries()) {
    if (!b.has(char) || count > b.get(char)) {
      return false;
    }
  }
  return true;
};

// returns true if the string can be formed by the chars in the bank.
const isGood = (str, bank) => overlaps(charCounts(str), bank);

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
export const countCharacters = (words, chars) => {
  const bank = charCounts(chars);
  return sum(words.map((word) => (isGood(word, bank) ? word.length : 0)));
};
