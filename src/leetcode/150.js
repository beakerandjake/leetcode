/**
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
 *
 * Evaluate the expression. Return an integer that represents the value of the expression.
 *
 * Note that:
 *
 *     The valid operators are '+', '-', '*', and '/'.
 *     Each operand may be an integer or another expression.
 *     The division between two integers always truncates toward zero.
 *     There will not be any division by zero.
 *     The input represents a valid arithmetic expression in a reverse polish notation.
 *     The answer and all the intermediate calculations can be represented in a 32-bit integer.
 *
 */

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.trunc(a / b),
};

const operatorLookup = new Set(Object.keys(operators));

/**
 * @param {string[]} tokens
 * @return {number}
 */
export const evalRPN = (tokens) => {
  const stack = [];
  for (const token of tokens) {
    if (operatorLookup.has(token)) {
      const rhs = stack.pop();
      const lhs = stack.pop();
      const result = operators[token](lhs, rhs);
      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0];
};
