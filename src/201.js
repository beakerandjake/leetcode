/**
 * Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.
 */

const getTopCommonBits = (a, b) => {
  let toReturn = 0;
  for (let i = 31; i >= 0; i--) {
    const mask = 1 << i;
    const aBit = a & mask;
    const bBit = b & mask;
    if (aBit !== bBit) {
      break;
    }
    toReturn |= mask;
  }
  return toReturn;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
export const rangeBitwiseAnd = (left, right) => left & getTopCommonBits(left, right);
