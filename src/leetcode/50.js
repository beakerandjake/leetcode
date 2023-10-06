/**
 * Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
 */

// export const myPow = (x, n) => {
//   if (n === 0) {
//     return 1;
//   }
//   return n > 0 ? x * myPow(x, n - 1) : 1 / myPow(x, Math.abs(n));
// };

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
export const myPow = (x, n) => {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x * x, (n - 1) / 2);
};
