/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character, but a character may map to itself.Given two strings s and t, determine if they are isomorphic.
 */

const charMap = (s, t) => {
  const sMap = new Map();
  const consumed = new Set();
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    if (!sMap.has(sChar)) {
      if (consumed.has(tChar)) {
        return false;
      }
      sMap.set(sChar, tChar);
      consumed.add(tChar);
    } else if (sMap.get(sChar) !== tChar) {
      return false;
    }
  }
  return true;
};

const indexMap = (s, t) => {
  const getIndexMap = (str) => {
    const toReturn = new Map();
    for (let i = 0; i < str.length; i++) {
      if (!toReturn.has(str[i])) {
        toReturn.set(str[i], i);
      }
    }
    return toReturn;
  };

  const sMap = getIndexMap(s);
  const tMap = getIndexMap(t);
  for (let i = 0; i < s.length; i++) {
    if (sMap.get(s[i]) !== tMap.get(t[i])) {
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
export const isIsomorphic = indexMap;
