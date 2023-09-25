import { tribonacci } from '../../src/leetcode/1137.js';

describe('1137. N-th Tribonacci Number', () => {
  [
    [4, 4],
    [25, 1389537],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = tribonacci(input);
      expect(result).toBe(expected);
    });
  });
});
