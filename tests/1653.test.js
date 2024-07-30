import { minimumDeletions } from '../src/1653.js';
import { generateTestName } from './util.js';

describe('1653. Minimum Deletions to Make String Balanced', () => {
  [
    ['aababbab', 2],
    ['bbaaaaabb', 2],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(minimumDeletions, ...args), () => {
      const result = minimumDeletions(s);
      expect(result).toBe(expected);
    });
  });
});
