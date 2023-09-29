/**
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
 * The returned integer should be non-negative as well.
 * You must not use any built-in exponent function or operator.
 *     For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 */

const squared = (x) => x * x;

/**
 * @param {number} x
 * @return {number}
 */
export const mySqrt = (x) => {
  let l = 0;
  let u = x;
  while (l <= u) {
    const m = Math.floor((l + u) / 2);
    const mSquared = squared(m);
    if (mSquared <= x && squared(m + 1) > x) {
      return m;
    }
    if (x > mSquared) {
      l = m + 1;
    } else {
      u = m - 1;
    }
  }
  return 0;
};
