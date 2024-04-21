import { validPath } from '../src/1971.js';
import { generateTestName } from './util.js';

describe('1971. Find if Path Exists in Graph', () => {
  [
    [
      3,
      [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      0,
      2,
      true,
    ],
    [
      6,
      [
        [0, 1],
        [0, 2],
        [3, 5],
        [5, 4],
        [4, 3],
      ],
      0,
      5,
      false,
    ],
  ].forEach((args) => {
    const [n, edges, source, destination, expected] = args;
    test(generateTestName(validPath, ...args), () => {
      const result = validPath(n, edges, source, destination);
      expect(result).toBe(expected);
    });
  });
});
