/**
 * Two strings are considered close if you can attain one from the other using the following operations:
 *     Operation 1: Swap any two existing characters.
 *         For example, abcde -> aecdb
 *     Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
 *         For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
 * You can use the operations on either string as many times as necessary.
 * Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
 */

const charMap = (str) =>
  [...str].reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

const valuesHash = (map) => [...map.values()].sort().join('.');

const charsEqual = (a, b) => [...a.keys()].every((key) => b.has(key));

const shapesEqual = (a, b) => valuesHash(a) === valuesHash(b);

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
export const closeStrings = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }
  const aMap = charMap(word1);
  const bMap = charMap(word2);
  return charsEqual(aMap, bMap) && shapesEqual(aMap, bMap);
};
