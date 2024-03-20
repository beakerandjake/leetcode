/**
 * Given a string s which represents an expression, evaluate this expression and
 * return its value.
 *
 * The integer division should truncate toward zero.
 *
 * You may assume that the given expression is always valid. All intermediate
 * results will be in the range of [-231, 231 - 1].
 *
 * Note: You are not allowed to use any built-in function which evaluates strings
 * as mathematical expressions, such as eval().
 *
 *
 *
 * Example 1:
 *
 * Input: s = "3+2*2"
 * Output: 7
 *
 *
 * Example 2:
 *
 * Input: s = " 3/2 "
 * Output: 1
 *
 *
 * Example 3:
 *
 * Input: s = " 3+5 / 2 "
 * Output: 5
 *
 *
 *
 *
 * Constraints:
 *
 *  * 1 <= s.length <= 3 * 105
 *  * s consists of integers and operators ('+', '-', '*', '/') separated by some
 *    number of spaces.
 *  * s represents a valid expression.
 *  * All the integers in the expression are non-negative integers in the range [0,
 *    231 - 1].
 *  * The answer is guaranteed to fit in a 32-bit integer.
 *
 *
 *
 * https://leetcode.com/problems/basic-calculator-ii
 */

const usingShuntingYard = (() => {
  class Operator {
    constructor(token, precedence, evaluateFn) {
      this.token = token;
      this.precedence = precedence;
      this.evaluateFn = evaluateFn;
    }
    toString() {
      return this.token;
    }
  }

  // standardizes the whitespace in the expression so each token is separated by one whitespace
  const sanitize = (expression) =>
    expression
      .trim()
      .replace(/\s/g, '')
      .replace(/[+\-*\/]/g, ' $& ');

  // returns true if the character is a numeric string.
  const isDigit = (str) => !isNaN(str);

  // parses the string as an integer and returns it.
  const toDigit = (str) => Number.parseInt(str, 10);

  // parses the string as an Operator and returns it.
  const toOperator = (() => {
    // maps an operator str to it's implementation fn.
    const implementationMap = new Map([
      ['+', (a, b) => a + b],
      ['-', (a, b) => a - b],
      ['*', (a, b) => a * b],
      ['/', (a, b) => Math.floor(a / b)],
    ]);
    // maps an operator str to it's order of operations precedence.
    const precedenceMap = new Map([
      ['+', 0],
      ['-', 0],
      ['*', 1],
      ['/', 1],
    ]);
    // parses the string as an Operator and returns it.
    return (str) => new Operator(str, precedenceMap.get(str), implementationMap.get(str));
  })();

  // parses the expression and returns an array of tokens
  const tokenize = (expression) =>
    sanitize(expression)
      .split(' ')
      .map((item) => (isDigit(item) ? toDigit(item) : toOperator(item)));

  // returns the tokens rearranged in RPN
  const shuntingYard = (tokens) => {
    const output = [];
    const operators = [];
    for (const token of tokens) {
      if (Number.isInteger(token)) {
        output.push(token);
        continue;
      }
      while (operators.length && operators.at(-1).precedence >= token.precedence) {
        output.push(operators.pop());
      }
      operators.push(token);
    }
    while (operators.length) {
      output.push(operators.pop());
    }
    return output;
  };

  // evaluates an array of tokens arranged in RPN
  const evaluate = (tokens) => {
    const operandStack = [];
    for (const token of tokens) {
      if (Number.isInteger(token)) {
        operandStack.push(token);
      } else {
        const right = operandStack.pop();
        const left = operandStack.pop();
        operandStack.push(token.evaluateFn(left, right));
      }
    }
    return operandStack.pop();
  };

  return (str) => evaluate(shuntingYard(tokenize(str)));
})();

const modifiedShuntingYard = (() => {
  // standardizes whitespace of the expression so each token is separated by exactly one space.
  const sanitize = (expression) =>
    expression
      .trim()
      .replace(/\s/g, '')
      .replace(/[+\-*\/]/g, ' $& ');

  // maps an operator token to a function which calculates the result.
  const operatorMap = new Map([
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['*', (a, b) => a * b],
    ['/', (a, b) => Math.floor(a / b)],
  ]);

  // does the string represent a valid number?
  const isNumber = (str) => !isNaN(str);

  // converts the string to a number.
  const toNumber = (str) => Number.parseInt(str, 10);

  // returns the precedence of the operator (higher means it should be evaluated first)
  const precedence = (op) => (op === '+' || op === '-' ? 1 : 2);

  return (expression) => {
    const operands = [];
    const operators = [];

    // modified shunting yard algorithm will process operators according to precedence.
    for (const token of sanitize(expression).split(' ')) {
      if (isNumber(token)) {
        operands.push(toNumber(token));
        continue;
      }
      // push current onto op stack if it has highest precedence.
      if (!operators.length || precedence(operators.at(-1)) < precedence(token)) {
        operators.push(token);
        continue;
      }
      // consume higher precedence operators until current has highest precedence.
      while (operators.length && precedence(operators.at(-1)) >= precedence(token)) {
        const right = operands.pop();
        const left = operands.pop();
        const op = operatorMap.get(operators.pop());
        operands.push(op(left, right));
      }
      operators.push(token);
    }

    // evaluate any operators that were not processed by shunting yard.
    while (operators.length) {
      const right = operands.pop();
      const left = operands.pop();
      const op = operatorMap.get(operators.pop());
      operands.push(op(left, right));
    }

    return operands.pop();
  };
})();

/**
 * @param {string} expression
 * @return {number}
 */
export const calculate = modifiedShuntingYard;
