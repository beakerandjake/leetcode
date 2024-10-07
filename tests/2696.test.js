import { minLength } from '../src/2696.js';
import { generateTestName } from './util.js';

describe('2696. Minimum String Length After Removing Substrings', () => {
  [
    ['ABFCACDB', 2],
    ['ACBBD', 5],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(minLength, ...args), () => {
      const result = minLength(s);
      expect(result).toBe(expected);
    });
  });
});
