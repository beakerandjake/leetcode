/**
 * Given a string s representing a valid expression, implement a basic calculator
 * to evaluate it, and return the result of the evaluation.
 *
 * Note: You are not allowed to use any built-in function which evaluates strings
 * as mathematical expressions, such as eval().
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "1 + 1"
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: s = " 2-1 + 2 "
 * Output: 3
 *
 *
 * Example 3:
 *
 *
 * Input: s = "(1+(4+5+2)-3)+(6+8)"
 * Output: 23
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 3 * 105
 *  * s consists of digits, '+', '-', '(', ')', and ' '.
 *  * s represents a valid expression.
 *  * '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
 *  * '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
 *  * There will be no two consecutive operators in the input.
 *  * Every number and running calculation will fit in a signed 32-bit integer.
 *
 *
 *
 * https://leetcode.com/problems/basic-calculator
 */

const usingShuntingYard = (() => {
  // returns true if the character is a digit.
  const isDigit = (char) => /[0-9]/.test(char);

  // converts the string to a number.
  const toNumber = (str) => Number(str);

  // parses the raw input and returns an array of tokens.
  const tokenize = (str) => {
    const sanitized = str.replace(/\s/g, '');
    const output = [];
    let index = 0;
    while (index < sanitized.length) {
      // consume entire number (can be multiple digits)
      if (isDigit(sanitized[index])) {
        const digits = [];
        while (index < sanitized.length && isDigit(sanitized[index])) {
          digits.push(sanitized[index++]);
        }
        output.push(toNumber(digits.join('')));
      }
      // handle edge case of negation at start of expression
      else if (index === 0 && sanitized[index] === '-') {
        output.push(0);
        output.push(sanitized[index++]);
      }
      // handle edge case of negation at start of sub expression
      else if (sanitized[index] === '(' && sanitized[index + 1] === '-') {
        output.push(sanitized[index++]);
        output.push(0);
        output.push(sanitized[index++]);
      }
      // consume the basic operator
      else {
        output.push(sanitized[index++]);
      }
    }
    return output;
  };

  // returns true if the value is a number.
  const isNumber = (x) => Number.isFinite(x);

  // returns true if the value is an operator.
  const isOperator = (char) => char === '+' || char === '-';

  // returns the precedence of the operator
  const precedence = (() => {
    const precedenceMap = new Map([
      ['+', 1],
      ['-', 1],
    ]);
    return (operator) => precedenceMap.get(operator);
  })();

  // converts the infix tokens to rpn.
  const shuntingYard = (tokens) => {
    const output = [];
    const operators = [];
    for (const token of tokens) {
      if (Number.isFinite(token)) {
        output.push(token);
      } else if (isOperator(token)) {
        while (operators.length && precedence(operators.at(-1)) >= precedence(token)) {
          output.push(operators.pop());
        }
        operators.push(token);
      } else if (token === '(') {
        operators.push(token);
      } else if (token === ')') {
        while (operators.length && operators.at(-1) !== '(') {
          output.push(operators.pop());
        }
        operators.pop();
      }
    }
    while (operators.length) {
      output.push(operators.pop());
    }
    return output;
  };

  // returns the result of applying the operator to the arguments.
  const evaluateOperator = (() => {
    const operatorMap = new Map([
      ['+', (a, b) => a + b],
      ['-', (a, b) => a - b],
    ]);
    return (operator, a, b) => operatorMap.get(operator)(a, b);
  })();

  // returns the result of evaluating the rpn expression.
  const evaluateExpression = (rpn) => {
    const output = [];
    while (rpn.length) {
      if (isNumber(rpn[0])) {
        output.push(rpn.shift());
      } else {
        const right = output.pop();
        const left = output.pop();
        output.push(evaluateOperator(rpn.shift(), left, right));
      }
    }
    return output.at(-1);
  };

  return (str) => evaluateExpression(shuntingYard(tokenize(str)));
})();

/**
 * @param {string} s
 * @return {number}
 */
export const calculate = usingShuntingYard;
