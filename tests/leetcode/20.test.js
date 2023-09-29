import { isValid } from '../../src/leetcode/20.js';

describe('20. Valid Parentheses', () => {
  [
    ['()', true],
    ['()[]{}', true],
    ['(]', false],
    ['((}', false],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isValid(input);
      expect(result).toBe(expected);
    });
  });
});
