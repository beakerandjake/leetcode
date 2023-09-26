/**
 * Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
 * Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
 */

const charMap = [
  1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
];

const points = (str, charIndex) => charMap[str.charCodeAt(charIndex) - 97];

const vowelCount = (str, start, end) => {
  let toReturn = 0;
  for (let i = start; i < end; i++) {
    toReturn += points(str, i);
  }
  return toReturn;
};

/**
 * @param {string} str
 * @param {number} k
 * @return {number}
 */
export const maxVowels = (str, k) => {
  let rollingCount = vowelCount(str, 0, k);
  let max = rollingCount;
  const sliceMax = str.length - k;
  for (let i = 1; i <= sliceMax; i++) {
    rollingCount += points(str, i + k - 1) - points(str, i - 1);
    if (rollingCount > max) {
      max = rollingCount;
    }
  }
  return max;
};
