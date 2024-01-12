/**
 * Write a function that takes the binary representation of an unsigned integer and
 * returns the number of '1' bits it has (also known as the Hamming weight).
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
export const hammingWeight = (n) => {
  let remaining = n;
  let count = 0;
  while (remaining) {
    count += remaining & 1;
    remaining >>>= 1;
  }
  return count;
};
