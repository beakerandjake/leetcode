import { addBinary } from '../../src/leetcode/67.js';

describe('67. Add Binary', () => {
  [
    ['11', '1', '100'],
    ['1', '111111110000000', '111111110000001'],
    ['1010', '1011', '10101'],
  ].forEach(([a, b, expected]) => {
    test(`${a},${b} -> ${expected}`, () => {
      const result = addBinary(a, b);
      expect(result).toBe(expected);
    });
  });
});
