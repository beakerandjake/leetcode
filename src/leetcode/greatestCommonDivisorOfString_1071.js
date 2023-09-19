/**
 * For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 */

const getLongestCommonPrefix = (a, b, i) => {
  if (i >= a.length || i >= b.length) {
    return i;
  }
  return a[i] === b[i] ? getLongestCommonPrefix(a, b, i + 1) : -1;
};

const prefixRepeats = (string, prefixEndIndex) => {
  if (string.length % prefixEndIndex !== 0) {
    return false;
  }

  for (let p = 0; p < prefixEndIndex; p++) {
    const prefixChar = string[p];
    for (let s = prefixEndIndex + p; s < string.length; s += prefixEndIndex) {
      if (string[s] !== prefixChar) {
        return false;
      }
    }
  }
  return true;
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export const gcdOfStrings = (a, b) => {
  let prefixEnd = getLongestCommonPrefix(a, b, 0);

  // don't share a common prefix, can't be divisible.
  if (prefixEnd === -1) {
    return '';
  }

  while (prefixEnd !== 0) {
    if (prefixRepeats(a, prefixEnd) && prefixRepeats(b, prefixEnd)) {
      return a.slice(0, prefixEnd);
    }
    prefixEnd--;
  }

  return '';
};
