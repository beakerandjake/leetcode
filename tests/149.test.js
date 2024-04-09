import { maxPoints } from '../src/149.js';
import { generateTestName } from './util.js';

describe('149. Max Points on a Line', () => {
  [
    [
      [
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      3,
    ],
    [
      [
        [1, 1],
        [3, 2],
        [5, 3],
        [4, 1],
        [2, 3],
        [1, 4],
      ],
      4,
    ],
  ].forEach((args) => {
    const [points, expected] = args;
    test(generateTestName(maxPoints, ...args), () => {
      const result = maxPoints(points);
      expect(result).toBe(expected);
    });
  });
});
