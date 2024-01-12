/**
 * You are given two strings word1 and word2.
 * Merge the strings by adding letters in alternating order, starting with word1.
 * If a string is longer than the other, append the additional letters onto the end of the merged string.
 * Return the merged string.
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
export const mergeAlternately = (word1, word2) => {
  if (word1.length === 1 && word2.length === 1) {
    return word1 + word2;
  }
  const toReturn = [];
  const minLength = Math.min(word1.length, word2.length);
  for (let i = 0; i < minLength; i++) {
    toReturn.push(word1[i]);
    toReturn.push(word2[i]);
  }

  if (word1.length !== word2.length) {
    const remaining = word1.length > word2.length ? word1 : word2;
    toReturn.push(remaining.slice(minLength));
  }

  return toReturn.join('');
};
