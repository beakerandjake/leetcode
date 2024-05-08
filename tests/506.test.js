import { findRelativeRanks } from '../src/506.js';
import { generateTestName } from './util.js';

describe('506. Relative Ranks', () => {
  [
    [
      [5, 4, 3, 2, 1],
      ['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5'],
    ],
    [
      [10, 3, 8, 9, 4],
      ['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4'],
    ],
  ].forEach((args) => {
    const [score, expected] = args;
    test(generateTestName(findRelativeRanks, ...args), () => {
      const result = findRelativeRanks(score);
      expect(result).toEqual(expected);
    });
  });
});
