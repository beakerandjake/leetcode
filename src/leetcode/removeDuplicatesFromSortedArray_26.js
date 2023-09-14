/* eslint-disable no-param-reassign */

/**
 * @param {number[]} array
 * @return {number}
 */
export const removeDuplicates = (array) => {
  if (array.length <= 1) {
    return array.length;
  }

  const encountered = new Set();
  const unique = array.reduce((acc, x) => {
    if (!encountered.has(x)) {
      encountered.add(x);
      acc.push(x);
    }
    return acc;
  }, []);

  unique.forEach((x, i) => {
    array[i] = x;
  });

  return encountered.size;
};
