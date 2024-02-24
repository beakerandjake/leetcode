import { titleToNumber } from '../src/171.js';

describe('171. Excel Sheet Column Number', () => {
  [
    ['A', 1],
    ['AB', 28],
    ['ZY', 701],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = titleToNumber(input);
      expect(result).toBe(expected);
    });
  });
});
