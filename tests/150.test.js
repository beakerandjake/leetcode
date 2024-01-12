import { evalRPN } from '../src/leetcode/150.js';

describe('150. Evaluate Reverse Polish Notation', () => {
  [
    [['2', '1', '+', '3', '*'], 9],
    [['4', '13', '5', '/', '+'], 6],
    [['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'], 22],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = evalRPN(input);
      expect(result).toBe(expected);
    });
  });
});
