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

const isNumeric = (char) => /\d/.test(char);

const subExpressionCount = (expression) =>
  [...expression].filter((x) => !isNumeric(x)).length;

/**
 * @param {string} expression
 * @return {number[]}
 */
export const diffWaysToCompute = (expression) => {
  const options = [];
  const backtrack = (index, opening, closing, current) => {
    if (index >= expression.length) {
      if (opening === 0 && closing === 0) {
        options.push(current.join(''));
      }
      return;
    }

    if (!/\d/.test(expression[index])) {
      backtrack(index + 1, opening, closing, [...current, expression[index]]);
      return;
    }

    for (let i = 1; i <= opening; i++) {
      const added = [...current, ...Array(i).fill('('), expression[index]];
      backtrack(index + 1, opening - i, closing, added);
    }

    for (let i = 1; i <= closing; i++) {
      if (opening <= closing - i) {
        const added = [...current, expression[index], ...Array(i).fill(')')];
        backtrack(index + 1, opening, closing - i, added);
      }
    }
  };
  const expCount = subExpressionCount(expression);
  console.log(expCount);
  backtrack(0, expCount, expCount, []);
  console.log(options);
};
