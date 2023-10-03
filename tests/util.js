/**
 * Returns a string representation of the array.
 * @param {Array} arr
 */
export const arrToStr = (arr) =>
  `[${arr?.map((x) => (Array.isArray(x) ? arrToStr(x) : x)).join(',')}]`;

/**
 * Returns a binary string representation of the number.
 */
export const binToStr = (bin) => (bin >>> 0).toString(2).padStart(32, '0');
