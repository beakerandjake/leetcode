/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 */

const frequencyMaps = (ransomNote, magazine) => {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  const frequencyMap = (str) => {
    const toReturn = new Map();
    for (const char of str) {
      toReturn.set(char, (toReturn.get(char) || 0) + 1);
    }
    return toReturn;
  };

  const magazineChars = frequencyMap(magazine);
  const ransomChars = frequencyMap(ransomNote);
  for (const [key, value] of ransomChars) {
    if ((magazineChars.get(key) || 0) < value) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
export const canConstruct = frequencyMaps;
