import { confusingNumber } from '../src/1056.js';
import { generateTestName } from './util.js';

describe('1056. Confusing Number', () => {
  [
    [6, true],
    [89, true],
    [11, false],
  ].forEach((args) => {
    const [n, expected] = args;
    test(generateTestName(confusingNumber, ...args), () => {
      const result = confusingNumber(n);
      expect(result).toBe(expected);
    });
  });
});
