/**
 * Given a string expression of numbers and operators, return all possible results
 * from computing all the different possible ways to group numbers and operators.
 * You may return the answer in any order.
 *
 * The test cases are generated such that the output values fit in a 32-bit integer
 * and the number of different results does not exceed 104.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: expression = "2-1-1"
 * Output: [0,2]
 * Explanation:
 * ((2-1)-1) = 0
 * (2-(1-1)) = 2
 *
 *
 * Example 2:
 *
 *
 * Input: expression = "2*3-4*5"
 * Output: [-34,-14,-10,-10,10]
 * Explanation:
 * (2*(3-(4*5))) = -34
 * ((2*3)-(4*5)) = -14
 * ((2*(3-4))*5) = -10
 * (2*((3-4)*5)) = -10
 * (((2*3)-4)*5) = 10
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= expression.length <= 20
 *  * expression consists of digits and the operator '+', '-', and '*'.
 *  * All the integer values in the input expression are in the range [0, 99].
 *  * The integer values in the input expression do not have a leading '-' or '+'
 *    denoting the sign.
 *
 *
 *
 * https://leetcode.com/problems/different-ways-to-add-parentheses
 */

const divideAndConquer = (() => {
  const operatorMap = new Map([
    ['*', ([a, b]) => a * b],
    ['+', ([a, b]) => a + b],
    ['-', ([a, b]) => a - b],
  ]);

  const isNumeric = (str) => /^\d+$/.test(str);

  const combinations = (a, b) => {
    const result = [];
    for (const a1 of a) {
      for (const b1 of b) {
        result.push([a1, b1]);
      }
    }
    return result;
  };

  return (expression) => {
    if (isNumeric(expression)) {
      return [Number(expression)];
    }
    const result = [];
    for (let i = 0; i <= expression.length - 1; i++) {
      if (isNumeric(expression[i])) {
        continue;
      }
      const ways = combinations(
        divideAndConquer(expression.slice(0, i)),
        divideAndConquer(expression.slice(i + 1)),
      );
      result.push(...ways.map(operatorMap.get(expression[i])));
    }
    return result;
  };
})();

/**
 * @param {string} expression
 * @return {number[]}
 */
export const diffWaysToCompute = divideAndConquer;
