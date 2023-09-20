/**
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 */

const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

const getVowelIndexes = (str) =>
  [...str].reduce((acc, char, index) => {
    if (vowels.has(char)) {
      acc.push(index);
    }
    return acc;
  }, []);

const swapVowels = (str, vowelIndexes) => {
  const chars = [...str];
  const mid = Math.floor(vowelIndexes.length / 2);
  for (let i = 0; i < mid; i++) {
    const lhsIndex = vowelIndexes[i];
    const rhsIndex = vowelIndexes[vowelIndexes.length - i - 1];
    const char = chars[lhsIndex];
    chars[lhsIndex] = chars[rhsIndex];
    chars[rhsIndex] = char;
  }
  return chars.join('');
};

/**
 * @param {string} s
 * @return {string}
 */
export const reverseVowels = (str) => {
  const indexes = getVowelIndexes(str);
  return indexes.length > 0 ? swapVowels(str, indexes) : str;
};
