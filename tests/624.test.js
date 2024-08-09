import { maxDistance } from '../src/624.js';
import { generateTestName } from './util.js';

describe('624. Maximum Distance in Arrays', () => {
  [
    [
      [
        [1, 2, 3],
        [4, 5],
        [1, 2, 3],
      ],
      4,
    ],
    [[[1], [1]], 0],
  ].forEach((args) => {
    const [arrays, expected] = args;
    test(generateTestName(maxDistance, ...args), () => {
      const result = maxDistance(arrays);
      expect(result).toBe(expected);
    });
  });
});
