/**
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters.
 * The words in s will be separated by at least one space.
 * Return a string of the words in reverse order concatenated by a single space.
 * Note that s may contain leading or trailing spaces or multiple spaces between two words.
 * The returned string should only have a single space separating the words. Do not include any extra spaces.
 */

// const simple = (str) => str.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');

const isWhitespace = (char) => char === ' ';

const consumeWhitespace = (str, index) => {
  if (index >= str.length) {
    return str.length;
  }
  return isWhitespace(str[index]) ? consumeWhitespace(str, index + 1) : index;
};

const consumeWord = (str, index) => {
  if (index >= str.length) {
    return str.length;
  }
  return !isWhitespace(str[index]) ? consumeWord(str, index + 1) : index;
};

const findWords = (str) => {
  let index = 0;
  const wordStack = [];
  while (index !== str.length) {
    const start = consumeWhitespace(str, index);
    if (start === str.length) {
      break;
    }
    const end = consumeWord(str, start);
    wordStack.push(end, start);
    index = end;
  }
  return wordStack;
};

const unwindWordStack = (str, words) => {
  const toReturn = [];
  while (words.length) {
    const start = words.pop();
    const end = words.pop();
    for (let i = start; i < end; i++) {
      toReturn.push(str[i]);
    }
    if (words.length) {
      toReturn.push(' ');
    }
  }
  return toReturn;
};

const join = (chars) => {
  let toReturn = '';
  for (let i = 0; i < chars.length; i++) {
    toReturn += chars[i];
  }
  return toReturn;
};

/**
 * @param {string} str
 * @return {string}
 */
export const reverseWords = (str) => join(unwindWordStack(str, findWords(str)));
