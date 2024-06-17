import { judgeSquareSum } from '../src/633.js';
import { generateTestName } from './util.js';

describe('633. Sum of Square Numbers', () => {
  [
    [5, true],
    [3, false],
  ].forEach((args) => {
    const [c, expected] = args;
    test(generateTestName(judgeSquareSum, ...args), () => {
      const result = judgeSquareSum(c);
      expect(result).toBe(expected);
    });
  });
});
