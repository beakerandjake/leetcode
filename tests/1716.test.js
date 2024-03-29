import { totalMoney } from '../src/1716.js';
import { generateTestName } from './util.js';

describe('1716. Calculate Money in Leetcode Bank', () => {
  [
    [4, 10],
    [10, 37],
    [20, 96],
    // [14, 10]
  ].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(totalMoney, ...args), () => {
      const result = totalMoney(input);
      expect(result).toBe(expected);
    });
  });
});
