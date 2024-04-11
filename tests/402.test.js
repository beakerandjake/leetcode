import { removeKdigits } from '../src/402.js';
import { generateTestName } from './util.js';

describe('402. Remove K Digits', () => {
  [
    ['1432219', 3, '1219'],
    ['10200', 1, '200'],
    ['10', 2, '0'],
  ].forEach((args) => {
    const [num, k, expected] = args;
    test(generateTestName(removeKdigits, ...args), () => {
      const result = removeKdigits(num, k);
      expect(result).toBe(expected);
    });
  });
});
