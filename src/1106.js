/* eslint-disable no-use-before-define */
/**
 * A boolean expression is an expression that evaluates to either true or false. It
 * can be in one of the following shapes:
 *
 *  * 't' that evaluates to true.
 *  * 'f' that evaluates to false.
 *  * '!(subExpr)' that evaluates to the logical NOT of the inner expression
 *    subExpr.
 *  * '&(subExpr1, subExpr2, ..., subExprn)' that evaluates to the logical AND of
 *    the inner expressions subExpr1, subExpr2, ..., subExprn where n >= 1.
 *  * '|(subExpr1, subExpr2, ..., subExprn)' that evaluates to the logical OR of
 *    the inner expressions subExpr1, subExpr2, ..., subExprn where n >= 1.
 *
 * Given a string expression that represents a boolean expression, return the
 * evaluation of that expression.
 *
 * It is guaranteed that the given expression is valid and follows the given rules.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: expression = "&(|(f))"
 * Output: false
 * Explanation:
 * First, evaluate |(f) --> f. The expression is now "&(f)".
 * Then, evaluate &(f) --> f. The expression is now "f".
 * Finally, return false.
 *
 *
 * Example 2:
 *
 *
 * Input: expression = "|(f,f,f,t)"
 * Output: true
 * Explanation: The evaluation of (false OR false OR false OR true) is true.
 *
 *
 * Example 3:
 *
 *
 * Input: expression = "!(&(f,t))"
 * Output: true
 * Explanation:
 * First, evaluate &(f,t) --> (false AND true) --> false --> f. The expression is now "!(f)".
 * Then, evaluate !(f) --> NOT false --> true. We return true.
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= expression.length <= 2 * 104
 *  * expression[i] is one following characters: '(', ')', '&', '|', '!', 't', 'f',
 *    and ','.
 *
 *
 *
 * https://leetcode.com/problems/parsing-a-boolean-expression
 */

/**global doApply, doEval */

const isLiteral = (expression) => expression === 't' || expression === 'f';

const and = (...args) => (args.every((x) => x === 't') ? 't' : 'f');

const or = (...args) => (args.some((x) => x === 't') ? 't' : 'f');

const not = (...args) => (args[0] === 't' ? 'f' : 't');

const extractFn = (symbol) => {
  switch (symbol) {
    case '!':
      return not;
    case '&':
      return and;
    case '|':
      return or;
    default:
      throw new Error(`Unknown fn: ${symbol}`);
  }
};

const extractSubExpression = (str, startIndex) => {
  const stack = [];
  let index = startIndex;
  while (index < str.length) {
    if (str[index] === '(') {
      stack.push(str[index]);
    } else if (str[index] === ')') {
      stack.pop();
      if (stack.length === 0) {
        return index;
      }
    }
    index++;
  }
  throw new Error('failed to parse sub expression');
};

const extractArguments = (expression) => {
  const result = [];
  const end = expression.length - 1;
  let i = 2;
  while (i < end) {
    if (isLiteral(expression[i])) {
      result.push(expression[i]);
      i += 2;
    } else {
      const sub = extractSubExpression(expression, i);
      result.push(expression.slice(i, sub + 1));
      i = sub + 2;
    }
  }
  return result;
};

const doEval = (expression) =>
  isLiteral(expression)
    ? expression
    : doApply(extractFn(expression[0]), extractArguments(expression));

const doApply = (fn, args) => fn(...args.map(doEval));

/**
 * @param {string} expression
 * @return {boolean}
 */
export const parseBoolExpr = (expression) => doEval(expression) === 't';
