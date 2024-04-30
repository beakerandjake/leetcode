import { wonderfulSubstrings } from '../src/1915.js';
import { generateTestName } from './util.js';

describe('1915. Number of Wonderful Substrings', () => {
  [
    ['aba', 4],
    ['aabb', 9],
    ['he', 2],
  ].forEach((args) => {
    const [word, expected] = args;
    test(generateTestName(wonderfulSubstrings, ...args), () => {
      const result = wonderfulSubstrings(word);
      expect(result).toBe(expected);
    });
  });
});
