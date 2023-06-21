/**
 * Shift the index to the left n times. Loops over the length if out of bounds.
 */
const shiftIndex = (index, times, length) => {
  let toReturn = index;
  for (let i = 0; i < times; i++) {
    const next = toReturn - 1;
    toReturn = next < 0 ? length - 1 : next;
  }
  return toReturn;
};

const fast = (array, times) => {};

const simple = (array, times) => {
  const copy = [...array];
  const { length } = copy;
  for (let index = 0; index < length; index++) {
    const shifted = shiftIndex(index, times, length);
    copy[shifted] = array[index];
  }
  return copy;
};

/**
 * Rotate a one-dimensional vector of n elements left by i positions.
 * For instance, with n = 8 and i = 3, the vector abcdefgh is rotated to defghabc.
 */

export const rotateLeft = (array, times) => simple(array, times);
