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

export const checkPermutation = (lhs, rhs) => {
  const sortAndCompare = (lhs, rhs) =>
    [...lhs].sort().join('') === [...rhs].sort().join('');

  return lhs !== rhs && sortAndCompare(lhs, rhs);
};
