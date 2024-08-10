import { isOneEditDistance } from '../src/161.js';
import { generateTestName } from './util.js';

describe('161. One Edit Distance', () => {
  [
    ['ab', 'acb', true],
    ['', '', false],
    ['cb', 'ab', true],
    ['ab', 'ba', false],
  ].forEach((args) => {
    const [s, t, expected] = args;
    test(generateTestName(isOneEditDistance, ...args), () => {
      const result = isOneEditDistance(s, t);
      expect(result).toBe(expected);
    });
  });
});
