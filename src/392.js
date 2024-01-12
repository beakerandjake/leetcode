/**
 * A subsequence of a string is a new string that is formed from the original string
 * by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
 * (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

const iterative = (() => {
  const consumeChar = (string, char, index) => {
    for (let i = index; i < string.length; i++) {
      if (string[i] === char) {
        return i;
      }
    }
    return -1;
  };

  return (s, t) => {
    if (s.length > t.length) {
      return false;
    }

    let sIndex = 0;
    let tIndex = 0;
    while (sIndex < s.length) {
      const tNext = consumeChar(t, s[sIndex++], tIndex);
      if (tNext === -1) {
        return false;
      }
      tIndex = tNext + 1;
    }
    return true;
  };
})();

const recursive = (s, sIndex, t, tIndex) => {
  if (sIndex === s.length) {
    return true;
  }
  if (tIndex === t.length) {
    return false;
  }

  return s[sIndex] === t[tIndex]
    ? recursive(s, sIndex + 1, t, tIndex + 1)
    : recursive(s, sIndex, t, tIndex + 1);
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isSubsequence = (s, t) => recursive(s, 0, t, 0);
