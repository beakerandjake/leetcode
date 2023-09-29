/**
 * Reverse bits of a given 32 bits unsigned integer.
 */

const xor = (n) => {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    if (n & (1 << (31 - i))) {
      result ^= 1 << i;
    }
  }
  return result >>> 0;
};

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
export const reverseBits = (n) => {
  let result = 0;
  let remaining = n;
  for (let i = 0; i < 32; i++) {
    result <<= 1;
    result |= remaining & 1;
    remaining >>= 1;
  }
  return result >>> 0;
};
