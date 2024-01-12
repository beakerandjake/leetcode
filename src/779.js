/**
 * We build a table of n rows (1-indexed). We start by writing 0 in the 1st row.
 * Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.
 *    For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
 * Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.
 */

// const getRowMemoized = () => {
//   const memo = new Map();
//   const getRow = (n) => {
//     if (n === 1) {
//       return '0';
//     }

//     if (!memo.has(n)) {
//       memo.set(n, [...getRow(n - 1)].map((x) => (x === '0' ? '01' : '10')).join(''));
//     }

//     return memo.get(n);
//   };
//   return getRow;
// }

const getBit = (k) => {
  if (k === 1) {
    return 0;
  }
  if (k === 2) {
    return 1;
  }
  // k is even use right side of parents expansion.
  if (k % 2 === 0) {
    return getBit(Math.floor((k + 1) / 2)) === 1 ? 0 : 1;
  }
  // k is odd use left side of parent expansion.
  return getBit(Math.floor((k + 1) / 2));
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
export const kthGrammar = (n, k) => getBit(k);
