import { isInterleave } from '../src/97.js';
import { generateTestName } from './util.js';

describe('97. Interleaving String', () => {
  [
    ['aabcc', 'dbbca', 'aadbbcbcac', true],
    ['aabcc', 'dbbca', 'aadbbbaccc', false],
    ['', '', '', true],
  ].forEach((args) => {
    const [s1, s2, s3, expected] = args;
    test(generateTestName(isInterleave, ...args), () => {
      const result = isInterleave(s1, s2, s3);
      expect(result).toBe(expected);
    });
  });
});
