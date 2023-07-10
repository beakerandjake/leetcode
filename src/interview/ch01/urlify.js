/* eslint-disable no-param-reassign */

const shift = (arr, startIndex, num) => {
  let remaining = num;
  while (remaining--) {
    arr[startIndex + remaining + 2] = arr[startIndex + remaining];
  }
};

const simple = (arr, length) => {
  let currentLength = length;
  for (let index = length - 1; index >= 0; index--) {
    if (arr[index] === ' ') {
      shift(arr, index, currentLength - index);
      arr[index] = '%';
      arr[index + 1] = '2';
      arr[index + 2] = '0';
      currentLength += 2;
    }
  }
};

/**
 * Replace all spaces in a string with %20
 * Assume string has space at end to hold additional characters.
 * Assume given true length of string.
 * Must perform in place.
 */
export const urlify = (arr, length) => {
  if (!arr || length <= 1 || arr.length === length) {
    return arr;
  }
  simple(arr, length);
  return arr;
};
