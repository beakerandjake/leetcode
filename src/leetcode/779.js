/**
 * We build a table of n rows (1-indexed). We start by writing 0 in the 1st row.
 * Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.
 *    For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
 * Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const getRowMemoized = () => {
  const memo = new Map();
  const getRow = (n) => {
    if (n === 1) {
      return '0';
    }

    if (!memo.has(n)) {
      memo.set(n, [...getRow(n - 1)].map((x) => (x === '0' ? '01' : '10')).join(''));
    }

    return memo.get(n);
  };
  return getRow;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
export const kthGrammar = (n, k) => {
  const getRow = getRowMemoized();
  return Number(getRow(n)[k - 1]);
};
