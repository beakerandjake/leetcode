import { minimumPushes } from '../src/3016.js';
import { generateTestName } from './util.js';

describe('3016. Minimum Number of Pushes to Type Word II', () => {
  [
    ['abcde', 5],
    ['xyzxyzxyzxyz', 12],
    ['aabbccddeeffgghhiiiiii', 24],
  ].forEach((args) => {
    const [word, expected] = args;
    test(generateTestName(minimumPushes, ...args), () => {
      const result = minimumPushes(word);
      expect(result).toBe(expected);
    });
  });
});
