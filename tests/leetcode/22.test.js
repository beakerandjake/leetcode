import { generateParenthesis } from '../../src/leetcode/22.js';
import { arrToStr } from '../util.js';

describe('22. Generate Parentheses', () => {
  [
    [3, ['((()))', '(()())', '(())()', '()(())', '()()()']],
    [1, ['()']],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${arrToStr(expected)}`, () => {
      const result = generateParenthesis(input);
      expect(result).toEqual(expected);
    });
  });
});
