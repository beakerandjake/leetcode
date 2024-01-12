/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

/**
 * @param {string[]} words
 * @return {string}
 */
export const longestCommonPrefix = (words) => {
  if (words.length <= 1) {
    return words.length ? words[0] : '';
  }
  const maxPrefixLength = Math.min(...words.map((x) => x.length));
  const toReturn = [];
  for (let i = 0; i < maxPrefixLength; i++) {
    const charToMatch = words[0][i];
    if (!words.every((word) => word[i] === charToMatch)) {
      break;
    }
    toReturn.push(charToMatch);
  }
  return toReturn.join('');
};
