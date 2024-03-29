/**
 * Given a pattern and a string s, find if s follows the same pattern.
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
 */

const charMap = (pattern, s) => {
  const words = s.split(' ');
  if (words.length !== pattern.length) {
    return false;
  }
  const patternMap = new Map();
  const consumedWords = new Set();
  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const word = words[i];

    if (!patternMap.has(p)) {
      if (consumedWords.has(word)) {
        return false;
      }
      patternMap.set(p, word);
      consumedWords.add(word);
      continue;
    }

    if (patternMap.get(p) !== word) {
      return false;
    }
  }
  return true;
};

const indexMap = (pattern, s) => {
  const getIndexMap = (items) => {
    const toReturn = new Map();
    for (let i = 0; i < items.length; i++) {
      if (!toReturn.has(items[i])) {
        toReturn.set(items[i], i);
      }
    }
    return toReturn;
  };

  const words = s.split(' ');

  if (words.length !== pattern.length) {
    return false;
  }
  const patternMap = getIndexMap(pattern);
  const wordMap = getIndexMap(words);
  for (let i = 0; i < pattern.length; i++) {
    if (patternMap.get(pattern[i]) !== wordMap.get(words[i])) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
export const wordPattern = indexMap;
