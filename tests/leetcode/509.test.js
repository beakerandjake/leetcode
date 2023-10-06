import { fib } from '../../src/leetcode/509.js';

describe('509. Fibonacci Number', () => {
  [
    [2, 1],
    [3, 2],
    [4, 3],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = fib(input);
      expect(result).toBe(expected);
    });
  });
});
