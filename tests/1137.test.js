import { tribonacci } from '../src/1137.js';
import { generateTestName } from './util.js';

describe('1137. N-th Tribonacci Number', () => {
  [
    [4, 4],
    [25, 1389537],
  ].forEach((args) => {
    const [n, expected] = args;
    test(generateTestName(tribonacci, ...args), () => {
      const result = tribonacci(n);
      expect(result).toBe(expected);
    });
  });
});
