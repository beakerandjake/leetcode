import { maximumOddBinaryNumber } from '../src/2864.js';

describe('2864. Maximum Odd Binary Number', () => {
  [
    ['010', '001'],
    ['0101', '1001'],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = maximumOddBinaryNumber(input);
      expect(result).toBe(expected);
    });
  });
});
