/**
 * Given a non-negative integer c, decide whether there're two integers a and b
 * such that a2 + b2 = c.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: c = 5
 * Output: true
 * Explanation: 1 * 1 + 2 * 2 = 5
 *
 *
 * Example 2:
 *
 *
 * Input: c = 3
 * Output: false
 *
 *
 *
 *
 * Constraints:
 *
 *  * 0 <= c <= 231 - 1
 *
 *
 *
 * https://leetcode.com/problems/sum-of-square-numbers
 */

const usingLinearSearch = (() => {
  // eslint-disable-next-line func-style
  function* squares(n) {
    let num = 0;
    while (num * num <= n) {
      yield num * num;
      num++;
    }
  }

  return (c) => {
    const encountered = new Set();
    for (const square of squares(c)) {
      const needed = c - square;
      if (needed === square || encountered.has(needed)) {
        return true;
      }
      encountered.add(square);
    }
    return false;
  };
})();

const usingBinarySearch = (() => {
  const square = (n) => n * n;

  // eslint-disable-next-line func-style
  function* squares(n) {
    let num = 0;
    while (square(num) <= n) {
      yield square(num);
      num++;
    }
  }

  const binarySearch = (lo, hi, target) => {
    if (lo > hi) {
      return false;
    }
    const m = lo + Math.floor((hi - lo) / 2);
    if (square(m) === target) {
      return true;
    }
    return square(m) < target
      ? binarySearch(m + 1, hi, target)
      : binarySearch(lo, m - 1, target);
  };

  return (c) => {
    for (const a of squares(c)) {
      const b = c - a;
      if (binarySearch(0, b, b)) {
        return true;
      }
    }
    return false;
  };
})();

/**
 * @param {number} c
 * @return {boolean}
 */
export const judgeSquareSum = usingBinarySearch;
