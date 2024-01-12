/* eslint-disable no-param-reassign */

/**
 * @param {number[]} array
 * @return {number}
 */
export const removeDuplicates = (array) => {
  if (array.length <= 2) {
    return array.length;
  }

  let slowIndex = 1;
  let fastIndex = 2;
  while (fastIndex < array.length) {
    const previous = array[slowIndex - 1];
    const current = array[slowIndex];
    const next = array[fastIndex];

    if (previous === current && current === next) {
      fastIndex++;
      continue;
    }

    array[++slowIndex] = array[fastIndex++];
  }

  return slowIndex + 1;
};
