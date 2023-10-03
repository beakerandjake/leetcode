import { addBinary } from '../../src/leetcode/67.js';

describe('67. Add Binary', () => {
  [
    ['11', '1', '100'],
    ['1010', '1011', '10101'],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = addBinary(input);
      expect(result).toBe(expected);
    });
  });
});
