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
  array.forEach((x) => {
    encountered.add(x);
  });
  let i = 0;
  encountered.forEach((x) => {
    array[i++] = x;
  });

  return encountered.size;
};
