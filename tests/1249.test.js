import { minRemoveToMakeValid } from '../src/1249.js';

describe('1249. Minimum Remove to Make Valid Parentheses', () => {
  [
    ['lee(t(c)o)de)', 'lee(t(c)o)de'],
    ['a)b(c)d', 'ab(c)d'],
    ['))((', ''],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = minRemoveToMakeValid(input);
      expect(result).toBe(expected);
    });
  });
});
