import { maximumGain } from '../src/1717.js';
import { generateTestName } from './util.js';

describe('1717. Maximum Score From Removing Substrings', () => {
  [
    ['cdbcbbaaabab', 4, 5, 19],
    ['aabbaaxybbaabb', 5, 4, 20],
  ].forEach((args) => {
    const [s, x, y, expected] = args;
    test(generateTestName(maximumGain, ...args), () => {
      const result = maximumGain(s, x, y);
      expect(result).toBe(expected);
    });
  });
});
