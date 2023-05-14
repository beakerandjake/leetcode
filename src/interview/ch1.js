/**
 * Returns true if the string has all unique characters.
 * @param {String} str
 */
export const isUnique = (str) => {
  const bruteForceSolution = () => {
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

  const hashTableSolution = () => {
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

  const bitVectorSolution = () => {
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

  return hashTableSolution();
};

/**
 * Given two strings, write a method to decide if one is a permutation of the other.
 * @param {String} lhs
 * @param {String} rhs
 * @returns
 */
export const checkPermutation = (lhs, rhs) => {
  const sortAndCompare = () => [...lhs].sort().join('') === [...rhs].sort().join('');

  const pickFromBucket = () => {
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

  return pickFromBucket();
};

/**
 * Write a method to replace all spaces in a string with %20
 * @param {String} stfr
 * @param {Number} length
 */
export const urlify = (str, length) => {
  const arraySolution = () => {
    let toReturn = [];
    for (let index = 0; index < length; index++) {
      const character = str[index];
      toReturn.push(character === ' ' ? '%20' : character);
    }
    return toReturn.join('');
  };

  const inPlaceSolution = () => {
    const toReturn = [...str];
    let characterIndex = length - 1;
    let outputIndex = toReturn.length - 1;
    while (characterIndex > 0) {
      const character = str[characterIndex--];
      if (character === ' ') {
        toReturn[outputIndex] = '0';
        toReturn[--outputIndex] = '2';
        toReturn[--outputIndex] = '%';
        outputIndex--;
      } else {
        toReturn[outputIndex--] = character;
      }
    }

    return toReturn.join('');
  };

  return inPlaceSolution();
};

console.log(urlify('Mr John Smith    ', 13));
