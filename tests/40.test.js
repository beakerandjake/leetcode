import { combinationSum2 } from '../src/40.js';
import { generateTestName } from './util.js';

describe('40. Combination Sum II', () => {
  [].forEach((args) => {
    const [, expected] = args;
    test(generateTestName(combinationSum2, ...args), () => {
      const result = combinationSum2();
      expect(result).toBe(expected);
    });
  });
});
