import { minSteps } from '../src/650.js';
import { generateTestName } from './util.js';

describe('650. 2 Keys Keyboard', () => {
  [
    [3, 3],
    [1, 0],
  ].forEach((args) => {
    const [n, expected] = args;
    test(generateTestName(minSteps, ...args), () => {
      const result = minSteps(n);
      expect(result).toBe(expected);
    });
  });
});
