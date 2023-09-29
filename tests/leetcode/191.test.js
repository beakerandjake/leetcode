import { hammingWeight } from '../../src/leetcode/191.js';

describe('191. Number of 1 Bits', () => {
  [
    [0b00000000000000000000000000001011, 3],
    [0b00000000000000000000000010000000, 1],
    [0b11111111111111111111111111111101, 31],
  ].forEach(([input, expected]) => {
    test(`${input.toString(2).padStart(31, '0')} -> ${expected}`, () => {
      const result = hammingWeight(input);
      expect(result).toBe(expected);
    });
  });
});
