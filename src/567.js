/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or
 * false otherwise.
 *
 * In other words, return true if one of s1's permutations is the substring of s2.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Explanation: s2 contains one permutation of s1 ("ba").
 *
 *
 * Example 2:
 *
 *
 * Input: s1 = "ab", s2 = "eidboaoo"
 * Output: false
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s1.length, s2.length <= 104
 *  * s1 and s2 consist of lowercase English letters.
 *
 *
 *
 * https://leetcode.com/problems/permutation-in-string
 */

//String.fromCharCode(97 + i)

// computes the index of the character in a hashArr
const index = (char) => char.charCodeAt(0) - 97;

// returns an array which represents a permutation hash of the string
const hashArr = (str) =>
  [...str].reduce((acc, char) => {
    acc[index(char)]++;
    return acc;
  }, Array(26).fill(0));

// returns true if the two hashes represents strings that are permutations
const overlaps = (a, b) => a.every((x, i) => b[i] === x);

// mutates the hash by removing the character from it.
const remove = (hash, char) => {
  hash[index(char)] = Math.max(0, hash[index(char)] - 1);
};

// mutates the hash by adding the character to it.
const add = (hash, char) => {
  hash[index(char)]++;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
export const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) {
    return false;
  }
  // use a sliding window of size s1 and compute the hash the window
  // as the window slides along s2 the hash will be updated.
  const end = s2.length - s1.length;
  const windowSize = s1.length;
  const h1 = hashArr(s1);
  const h2 = hashArr(s2.slice(0, windowSize));
  for (let i = 0; i < end; i++) {
    if (overlaps(h1, h2)) {
      return true;
    }
    remove(h2, s2[i]);
    add(h2, s2[i + windowSize]);
  }
  return overlaps(h1, h2);
};
