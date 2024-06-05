/**
 * Given a string array words, return an array of all characters that show up in
 * all strings within the words (including duplicates). You may return the answer
 * in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: words = ["bella","label","roller"]
 * Output: ["e","l","l"]
 *
 *
 * Example 2:
 *
 * Input: words = ["cool","lock","cook"]
 * Output: ["c","o"]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= words.length <= 100
 *  * 1 <= words[i].length <= 100
 *  * words[i] consists of lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/find-common-characters
 */

const usingMapUnion = (() => {
  // converts the string to a map, mapping each char to the number of times it occurs.
  const charCounts = (word) =>
    [...word].reduce((acc, x) => acc.set(x, (acc.get(x) || 0) + 1), new Map());

  // returns the union of the two maps
  const union = (a, b) => {
    const result = new Map();
    for (const [k, v] of a.entries()) {
      if (b.has(k)) {
        result.set(k, Math.min(v, b.get(k)));
      }
    }
    return result;
  };

  // fills an array n times with the value
  const repeat = (value, times) => Array(times).fill(value);

  // converts the map to an array, with each key present in the array 'value' times.
  const expand = (charMap) => {
    const result = [];
    for (const [k, v] of charMap.entries()) {
      result.push(...repeat(k, v));
    }
    return result;
  };

  return (words) => {
    const [first, ...rest] = words.map(charCounts);
    return expand(rest.reduce((acc, x) => union(acc, x), first));
  };
})();

const usingArray = (() => {
  // returns an empty char lookup array
  const charLookup = () => Array(26).fill(0);

  // converts a character (a-z) to a lookup index
  const toIndex = (char) => char.charCodeAt() - 97;

  // converts a lookup index to a char (a-z)
  const toChar = (index) => String.fromCharCode(index + 97);

  // converts the string to a map, mapping each char to the number of times it occurs.
  const charCounts = (word) =>
    [...word].reduce((acc, x) => {
      acc[toIndex(x)] += 1;
      return acc;
    }, charLookup());

  // unions the two lookup arrays
  const union = (a, b) => a.map((x, i) => Math.min(x, b[i]));

  // fills an array n times with the value
  const repeat = (value, times) => Array(times).fill(value);

  // expands a lookup array, with each char present in the array 'count' times
  const expand = (lookup) =>
    lookup.reduce((acc, char, i) => {
      acc.push(...repeat(toChar(i), char));
      return acc;
    }, []);

  return (words) => {
    const [first, ...rest] = words.map(charCounts);
    return expand(rest.reduce((acc, x) => union(acc, x), first));
  };
})();

/**
 * @param {string[]} words
 * @return {string[]}
 */
export const commonChars = usingArray;
