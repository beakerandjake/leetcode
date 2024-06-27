import { findCenter } from '../src/1791.js';
import { generateTestName } from './util.js';

describe('1791. Find Center of Star Graph', () => {
  [
    [
      [
        [1, 2],
        [2, 3],
        [4, 2],
      ],
      2,
    ],
    [
      [
        [1, 2],
        [5, 1],
        [1, 3],
        [1, 4],
      ],
      1,
    ],
  ].forEach((args) => {
    const [edges, expected] = args;
    test(generateTestName(findCenter, ...args), () => {
      const result = findCenter(edges);
      expect(result).toBe(expected);
    });
  });
});
