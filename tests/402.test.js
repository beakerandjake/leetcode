import { removeKdigits } from '../src/402.js';

describe('402. Remove K Digits', () => {
  [
    ['1432219', 3, '1219'],
    ['10200', 1, '200'],
    ['10', 2, '0'],
    ['10', 1, '0'],
    ['112', 1, '11']
  ].forEach(([input, k, expected]) => {
    test(`${input},${k} -> ${expected}`, () => {
      const result = removeKdigits(input, k);
      expect(result).toBe(expected);
    });
  });
});
