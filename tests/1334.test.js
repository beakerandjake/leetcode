import { findTheCity } from '../src/1334.js';
import { generateTestName } from './util.js';

describe('1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance', () => {
  [
    [
      4,
      [
        [0, 1, 3],
        [1, 2, 1],
        [1, 3, 4],
        [2, 3, 1],
      ],
      4,
      3,
    ],
    [
      5,
      [
        [0, 1, 2],
        [0, 4, 8],
        [1, 2, 3],
        [1, 4, 2],
        [2, 3, 1],
        [3, 4, 1],
      ],
      2,
      0,
    ],
  ].forEach((args) => {
    const [n, edges, distanceThreshold, expected] = args;
    test(generateTestName(findTheCity, ...args), () => {
      const result = findTheCity(n, edges, distanceThreshold);
      expect(result).toBe(expected);
    });
  });
});
