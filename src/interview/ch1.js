/**
 * Returns true if the string has all unique characters.
 * @param {String} str
 */
export const isUnique = (str) => {
  const bruteForceSolution = (str) => {
    for (let index = 0; index < str.length; index++) {
      const character = str[index];
      for (let y = 0; y < str.length; y++) {
        if (y === index) {
          continue;
        }
        if (str[y] === character) {
          return false;
        }
      }
    }
    return true;
  };

  const hashTableSolution = (str) => {
    const encountered = {};
    for (let index = 0; index < str.length; index++) {
      const character = str[index];
      if (encountered[character]) {
        return false;
      }
      encountered[character] = true;
    }
    return true;
  };

  const bitVectorSolution = (str) => {
    const encountered = Array(3000).fill(0);
    for (let index = 0; index < str.length; index++) {
      const charCode = str.charCodeAt(index);
      if (encountered[charCode]) {
        return false;
      }
      encountered[charCode] = 1;
    }
    return true;
  };

  return hashTableSolution(str);
};

/**
 * Given two strings, write a method to decide if one is a permutation of the other.
 * @param {String} lhs
 * @param {String} rhs
 * @returns
 */
export const checkPermutation = (lhs, rhs) => {
  const sortAndCompare = (lhs, rhs) =>
    [...lhs].sort().join('') === [...rhs].sort().join('');

  const pickFromBucket = (lhs, rhs) => {
    const characterBucket = [...lhs].reduce((acc, x) => {
      acc[x] = acc[x] ? acc[x] + 1 : 1;
      return acc;
    }, {});

    for (let index = 0; index < rhs.length; index++) {
      const character = rhs[index];
      const remaining = characterBucket[character];
      if (!remaining) {
        return false;
      }
      characterBucket[character] = remaining - 1;
    }

    return Object.values(characterBucket).every((x) => x === 0);
  };

  if (lhs === rhs) {
    return false;
  }

  if (lhs.length !== rhs.length) {
    return false;
  }

  return pickFromBucket(lhs, rhs);
};
