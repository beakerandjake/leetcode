/**
 * Given a string expression representing an expression of fraction addition and
 * subtraction, return the calculation result in string format.
 *
 * The final result should be an irreducible fraction
 * [https://en.wikipedia.org/wiki/Irreducible_fraction]. If your final result is an
 * integer, change it to the format of a fraction that has a denominator 1. So in
 * this case, 2 should be converted to 2/1.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: expression = "-1/2+1/2"
 * Output: "0/1"
 *
 *
 * Example 2:
 *
 *
 * Input: expression = "-1/2+1/2+1/3"
 * Output: "1/3"
 *
 *
 * Example 3:
 *
 *
 * Input: expression = "1/3-1/2"
 * Output: "-1/6"
 *
 *
 *
 *
 * Constraints:
 *
 *  * The input string only contains '0' to '9', '/', '+' and '-'. So does the
 *    output.
 *  * Each fraction (input and output) has the format ±numerator/denominator. If
 *    the first input fraction or the output is positive, then '+' will be omitted.
 *  * The input only contains valid irreducible fractions, where the numerator and
 *    denominator of each fraction will always be in the range [1, 10]. If the
 *    denominator is 1, it means this fraction is actually an integer in a fraction
 *    format defined above.
 *  * The number of given fractions will be in the range [1, 10].
 *  * The numerator and denominator of the final result are guaranteed to be valid
 *    and in the range of 32-bit int.
 *
 *
 *
 * https://leetcode.com/problems/fraction-addition-and-subtraction
 */

// returns the greatest common divisor between the two numbers
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

// constructs a new fraction from the numerator and denominator
const fraction = (numer, denom) => {
  const g = Math.abs(gcd(numer, denom));
  return [numer / g, denom / g];
};

// returns the numerator of the fraction
const numer = (f) => f[0];

// returns the denominator of the fraction
const denom = (f) => f[1];

// parse the raw expression string and returns an array of fractions
const parse = (expression) =>
  expression.match(/([+-]{1}\d+\/\d+)/g).reduce((acc, m) => {
    const sign = m[0] === '+' ? 1 : -1;
    const [n, d] = m.slice(1).split('/');
    acc.push(fraction(Number(n) * sign, Number(d)));
    return acc;
  }, []);

// adds the two fractions together and returns a new fraction
const add = (a, b) =>
  fraction(numer(a) * denom(b) + numer(b) * denom(a), denom(a) * denom(b));

// converts the fraction to its string representation
const toStr = (f) => `${numer(f)}/${denom(f)}`;

/**
 * @param {string} expression
 * @return {string}
 */
export const fractionAddition = (expression) => {
  // append a leading + sign if the first fraction in the expression is positive.
  const fractions = parse(expression.startsWith('-') ? expression : `+${expression}`);
  return toStr(fractions.reduce((acc, f) => add(acc, f), fraction(0, 1)));
};
