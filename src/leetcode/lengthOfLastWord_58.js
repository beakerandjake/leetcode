/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 */

const simpleRegex = (string) => string.trim().replace(/\s+/, ' ').split(' ').pop().length;

const simpleIterative = (string) => {
  let characterCount = 0;
  for (let i = string.length; i--; ) {
    const isLetter = string[i] !== ' ';
    if (isLetter) {
      characterCount++;
    } else if (characterCount) {
      return characterCount;
    }
  }
  return characterCount;
};

/**
 * @param {string} string
 * @return {number}
 */
export const lengthOfLastWord = simpleRegex;
