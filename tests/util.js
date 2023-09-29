/**
 * Returns a string representation of the array.
 * @param {Array} arr
 */
export const arrToStr = (arr) => `[${arr?.join(',')}]`;

/**
 * Returns a binary string representation of the number.
 */
export const binToStr = (bin) => bin.toString(2).padStart(32, '0');
