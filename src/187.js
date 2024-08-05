/**
 * The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C',
 * 'G', and 'T'.
 *
 *  * For example, "ACGAATTCCG" is a DNA sequence.
 *
 * When studying DNA, it is useful to identify repeated sequences within the DNA.
 *
 * Given a string s that represents a DNA sequence, return all the 10-letter-long
 * sequences (substrings) that occur more than once in a DNA molecule. You may
 * return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 * Output: ["AAAAACCCCC","CCCCCAAAAA"]
 *
 *
 * Example 2:
 *
 * Input: s = "AAAAAAAAAAAAA"
 * Output: ["AAAAAAAAAA"]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 105
 *  * s[i] is either 'A', 'C', 'G', or 'T'.
 *
 *
 *
 * https://leetcode.com/problems/repeated-dna-sequences
 */

// iterates the string using a sliding window of size 'windowSize' and yields each window
const slidingWindow = function* (str, windowSize) {
  const end = str.length - windowSize;
  for (let i = 0; i <= end; i++) {
    yield str.slice(i, i + windowSize);
  }
};

/**
 * @param {string} s
 * @return {string[]}
 */
export const findRepeatedDnaSequences = (s) => {
  const result = new Set();
  const encountered = new Set();
  for (const sequence of slidingWindow(s, 10)) {
    if (encountered.has(sequence)) {
      result.add(sequence);
    }
    encountered.add(sequence);
  }
  return [...result];
};
