const hashTable = (str) => {
  const chars = {};
  return [...str].every((char) => {
    if (char in chars) {
      return false;
    }
    chars[char] = true;
    return true;
  });
};

const set = (str) => {
  return new Set(str).size === str.length;
};

export const isUnique = hashTable;
