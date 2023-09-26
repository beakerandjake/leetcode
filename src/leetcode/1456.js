/**
 * Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
 * Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
 */

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

const vowelCount = (str, start, end) => {
  let toReturn = 0;
  for (let i = start; i < end; i++) {
    if (vowels.has(str[i])) {
      toReturn++;
    }
  }
  return toReturn;
};

const getVowelCounts = (str, k) => {
  const toReturn = [];
  const maxStart = str.length - k;
  for (let i = 0; i <= maxStart; i++) {
    toReturn.push(vowelCount(str, i, i + k));
  }
  return toReturn;
};

/**
 * @param {string} str
 * @param {number} k
 * @return {number}
 */
export const maxVowels = (str, k) => {
  const vowelCounts = getVowelCounts(str, k);
  return Math.max(...vowelCounts, 0);
};
