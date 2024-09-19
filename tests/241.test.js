import { diffWaysToCompute } from '../src/241.js';
import { generateTestName } from './util.js';

describe('241. Different Ways to Add Parentheses', () => {
  [
    ['2-1-1', [0, 2]],
    ['2*3-4*5', [-34, -14, -10, -10, 10]],
  ].forEach((args) => {
    const [expression, expected] = args;
    test(generateTestName(diffWaysToCompute, ...args), () => {
      const result = diffWaysToCompute(expression);
      expect(result).toIncludeSameMembers(expected);
    });
  });
});
