/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */

const sorting = (s, t) => {
  const arraysEqual = (a, b) => a.every((x, i) => x === b[i]);
  return s.length === t.length ? arraysEqual([...s].sort(), [...t].sort()) : false;
};

const map = (s, t) => {
  const frequencyMap = (str) => {
    const toReturn = new Map();
    for (const char of str) {
      toReturn.set(char, (toReturn.get(char) || 0) + 1);
    }
    return toReturn;
  };

  if (s.length !== t.length) {
    return false;
  }
  const sMap = frequencyMap(s);
  const tMap = frequencyMap(t);
  for (const [key, value] of sMap) {
    if (tMap.get(key) !== value) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isAnagram = sorting;
