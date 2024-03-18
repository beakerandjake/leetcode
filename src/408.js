/**
 * A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their lengths. The lengths should not have leading zeros.
 *
 * For example, a string such as "substitution" could be abbreviated as (but not limited to):
 *
 *     "s10n" ("s ubstitutio n")
 *     "sub4u4" ("sub stit u tion")
 *     "12" ("substitution")
 *     "su3i1u2on" ("su bst i t u ti on")
 *     "substitution" (no substrings replaced)
 *
 * The following are not valid abbreviations:
 *
 *     "s55n" ("s ubsti tutio n", the replaced substrings are adjacent)
 *     "s010n" (has leading zeros)
 *     "s0ubstitution" (replaces an empty substring)
 *
 * Given a string word and an abbreviation abbr, return whether the string matches the given abbreviation.
 *
 * A substring is a contiguous non-empty sequence of characters within a string.
 *
 *
 * Example 1:
 *
 * Input: word = "internationalization", abbr = "i12iz4n"
 * Output: true
 * Explanation: The word "internationalization" can be abbreviated as "i12iz4n" ("i nternational iz atio n").
 *
 * Example 2:
 *
 * Input: word = "apple", abbr = "a2e"
 * Output: false
 * Explanation: The word "apple" cannot be abbreviated as "a2e".
 *
 * Constraints:
 *
 *     1 <= word.length <= 20
 *     word consists of only lowercase English letters.
 *     1 <= abbr.length <= 10
 *     abbr consists of lowercase English letters and digits.
 *     All the integers in abbr will fit in a 32-bit integer.
 *
 * https://leetcode.com/problems/valid-word-abbreviation/description/
 */

const parseAbbreviations = (abbr) => abbr.match(/([a-z]+|[0-9]+)/g);

const isWord = (abbr) => /^[a-z]+$/.test(abbr);

const isNumber = (abbr) => /^[\d]+$/.test(abbr);

// always returns the abbreviation which was passed in.
const identity = (word, index, abbr) => abbr;

// attempts to return a slice of word from [index, index + abbr].
// returns null if the abbr represents an invalid amount of characters.
const expandNumber = (word, index, abbr) => {
  if (abbr.startsWith('0')) {
    return null;
  }
  const parsed = Number.parseInt(abbr, 10);

  if (parsed === 0 || parsed > word.length - index) {
    return null;
  }
  return word.slice(index, index + parsed);
};

// maps a abbreviation predicate function to an expansion function.
// if a predicate returns true the expansion function will be used to expand the abbreviation.
const expansionMap = new Map([
  [isWord, identity],
  [isNumber, expandNumber],
]);

// attempts to expand the abbreviation, returns null if abbreviation is not valid.
const expand = (word, index, abbr) => {
  for (const [testFn, expandFn] of expansionMap) {
    if (testFn(abbr)) {
      return expandFn(word, index, abbr);
    }
  }
  return null;
};

// returns the word that results from expanding all of the abbreviations.
// if the abbreviations result in an invalid word then null is returned.
const expandAbbreviations = (original, abbreviations) => {
  let result = '';
  for (const abbr of abbreviations) {
    const expanded = expand(original, result.length, abbr);
    if (expanded == null) {
      return null;
    }
    result += expanded;
  }
  return result;
};

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
export const validWordAbbreviation = (word, abbr) =>
  expandAbbreviations(word, parseAbbreviations(abbr)) === word;
