const uniqBySet = (str) => new Set(str).size === str.length;

const uniqByHashTable = (str) => {
  const chars = {};
  return [...str].every((char) => {
    if (char in chars) {
      return false;
    }
    chars[char] = true;
    return true;
  });
};

const uniqByBitVector = (str) => {
  const lookup = Array(256).fill(0);
  return [...str].every((char) => {
    const index = char.charCodeAt();

    if (lookup[index]) {
      return false;
    }

    lookup[index] = 1;
    return true;
  });
};

const uniqByBruteForce = (str) => {
  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    for (let next = 0; next < str.length; next++) {
      if (index !== next && char === str[next]) {
        return false;
      }
    }
  }
  return true;
};

const uniqBySort = (str) => {
  const sorted = [...str].sort();
  for (let index = 1; index < str.length; index++) {
    if (sorted[index] === sorted[index - 1]) {
      return false;
    }
  }
  return true;
};

export const isUnique = (str) => {
  if (!str || str.length === 1) {
    return true;
  }

  if (str.length > 256) {
    return false;
  }

  return uniqBySort(str);
};
