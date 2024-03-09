/**
 * Given an integer n, return a string array answer (1-indexed) where:
 *
 *  * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 *  * answer[i] == "Fizz" if i is divisible by 3.
 *  * answer[i] == "Buzz" if i is divisible by 5.
 *  * answer[i] == i (as a string) if none of the above conditions are true.
 *
 *
 *
 * Example 1:
 *
 * Input: n = 3
 * Output: ["1","2","Fizz"]
 *
 *
 * Example 2:
 *
 * Input: n = 5
 * Output: ["1","2","Fizz","4","Buzz"]
 *
 *
 * Example 3:
 *
 * Input: n = 15
 * Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= n <= 104
 *
 *
 *
 * https://leetcode.com/problems/fizz-buzz
 */

const nums = (n) => [...Array(n)].map((_, i) => i + 1);

const fizz = (num) => (num % 3 === 0 ? 'Fizz' : '');

const buzz = (num) => (num % 5 === 0 ? 'Buzz' : '');

const convert = (num) => `${fizz(num)}${buzz(num)}` || `${num}`;

/**
 * @param {number} n
 * @return {string[]}
 */
export const fizzBuzz = (n) => nums(n).map(convert);
