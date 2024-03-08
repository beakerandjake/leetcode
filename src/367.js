/**
 * Given a positive integer num, return true if num is a perfect square or false
 * otherwise.
 *
 * A perfect square is an integer that is the square of an integer. In other words,
 * it is the product of some integer with itself.
 *
 * You must not use any built-in library function, such as sqrt.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: num = 16
 * Output: true
 * Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
 *
 *
 * Example 2:
 *
 *
 * Input: num = 14
 * Output: false
 * Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= num <= 231 - 1
 *
 *
 *
 * https://leetcode.com/problems/valid-perfect-square
 */

const square = (x) => x * x;

const average = (x, y) => (x + y) / 2;

const improve = (x, guess) => average(guess, x / guess);

const goodEnough = (x, guess) => Math.abs(square(guess) - x) < 0.0001;

const sqrt = (x, guess) => (goodEnough(x, guess) ? guess : sqrt(x, improve(x, guess)));

/**
 * @param {number} num
 * @return {boolean}
 */
export const isPerfectSquare = (num) => {
  const squareRoot = sqrt(num, 1);
  return squareRoot - Math.trunc(squareRoot) < 0.00001;
};
