/* eslint-disable no-param-reassign */

/**
 * @param {number[]} array
 * @return {number}
 */
export const removeDuplicates = (array) => {
  if (array.length <= 1) {
    return array.length;
  }

  let slowIndex = 0;
  let fastIndex = 1;
  while (fastIndex < array.length) {
    if (array[slowIndex] === array[fastIndex]) {
      fastIndex++;
      continue;
    }
    array[++slowIndex] = array[fastIndex++];
  }

  return slowIndex + 1;
};
