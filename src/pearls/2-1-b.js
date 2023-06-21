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

const swap = (array, sourceIndex, destIndex) => {
  const source = array[sourceIndex];
  array[sourceIndex] = array[destIndex];
  array[destIndex] = source;
};

const fast = (array, times) => {
  let actualTimes = times % array.length;

  while (actualTimes--) {
    let current = 0;
    let next = current;

    while (++next < array.length) {
      swap(array, current, next);
      current = next;
    }
  }

  return array;
};

const simple = (array, times) => {
  const copy = [...array];
  for (let index = 0; index < array.length; index++) {
    copy[shiftIndex(index, times, array.length)] = array[index];
  }
  return copy;
};

/**
 * Rotate a one-dimensional vector of n elements left by i positions.
 * For instance, with n = 8 and i = 3, the vector abcdefgh is rotated to defghabc.
 */

export const rotateLeft = (array, times) => fast(array, times);
