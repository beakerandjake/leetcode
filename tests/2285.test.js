import { maximumImportance } from '../src/2285.js';
import { generateTestName } from './util.js';

describe('2285. Maximum Total Importance of Roads', () => {
  [
    [
      5,
      [
        [0, 1],
        [1, 2],
        [2, 3],
        [0, 2],
        [1, 3],
        [2, 4],
      ],
      43,
    ],
    [
      5,
      [
        [0, 3],
        [2, 4],
        [1, 3],
      ],
      20,
    ],
  ].forEach((args) => {
    const [n, roads, expected] = args;
    test(generateTestName(maximumImportance, ...args), () => {
      const result = maximumImportance(n, roads);
      expect(result).toBe(expected);
    });
  });
});
