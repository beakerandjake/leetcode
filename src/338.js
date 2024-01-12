/**
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
 */

const functional = (n) => {
  const bitMasks = [...Array(17)].map((_, i) => 1 << i);
  return [...Array(n + 1)].map((_, num) =>
    bitMasks.reduce((acc, mask) => (num & mask ? acc + 1 : acc), 0)
  );
};

const iterative = (n) => {
  const toReturn = [0];
  for (let num = 1; num <= n; num++) {
    let count = 0;
    for (let bit = 0; bit < 17; bit++) {
      if (num & (1 << bit)) {
        count++;
      }
    }
    toReturn[num] = count;
  }
  return toReturn;
};

/**
 * @param {number} n
 * @return {number[]}
 */
export const countBits = functional;
