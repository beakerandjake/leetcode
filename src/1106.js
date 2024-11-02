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

// returns true if the expression represents a literal value in our language.
const isLiteral = (expression) => expression === 't' || expression === 'f';

// converts a boolean value to a literal value.
const toLiteral = (bool) => (bool ? 't' : 'f');

// converts the literal to a boolean value.
const toBool = (literal) => literal === 't';

// returns a literal that is the logical and of the arguments.
const and = (...args) => toLiteral(args.every(toBool));

// returns a literal that is the logical or of the arguments.
const or = (...args) => toLiteral(args.some(toBool));

// returns a literal that is the logical not of the arguments.
const not = (...args) => toLiteral(!toBool(args[0]));

// returns a function which can apply the logic defined by the symbol.
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

// extracts a sub expression of an expression, which starts at a given index
const extractSubExpression = (expression, startIndex) => {
  const stack = [];
  let index = startIndex;
  // this sub expression could itself contain sub expressions
  // need to use a stack to ensure we match the correct opening and closing parens
  while (index < expression.length) {
    if (expression[index] === '(') {
      stack.push(expression[index]);
    } else if (expression[index] === ')') {
      stack.pop();
      if (stack.length === 0) {
        return index;
      }
    }
    index++;
  }
  throw new Error(
    `Failed to parse sub expression starting at: ${startIndex}, in: ${expression}`,
  );
};

// evaluates a well formed expression and returns a list of arguments (expressions)
const extractArgs = (expression) => {
  const result = [];
  // skip ending ')'
  const end = expression.length - 1;
  // skip starting 'X('
  let i = 2;
  while (i < end) {
    if (isLiteral(expression[i])) {
      result.push(expression[i]);
    } else {
      const subEnd = extractSubExpression(expression, i);
      result.push(expression.slice(i, subEnd + 1));
      i = subEnd;
    }
    // skip the next ',' (if exists)
    i += 2;
  }
  return result;
};

// evaluates the expression and returns the literal result.
const doEval = (expression) =>
  isLiteral(expression)
    ? expression
    : doApply(extractFn(expression[0]), extractArgs(expression));

// execute the function with a given list of arguments (expressions which must be evaluated)
const doApply = (fn, args) => fn(...args.map(doEval));

/**
 * @param {string} expression
 * @return {boolean}
 */
export const parseBoolExpr = (expression) => toBool(doEval(expression));
