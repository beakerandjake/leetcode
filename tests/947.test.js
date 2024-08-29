import { removeStones } from '../src/947.js';
import { generateTestName } from './util.js';

describe('947. Most Stones Removed with Same Row or Column', () => {
  [
    [
      [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 2],
        [2, 1],
        [2, 2],
      ],
      5,
    ],
    [
      [
        [0, 0],
        [0, 2],
        [1, 1],
        [2, 0],
        [2, 2],
      ],
      3,
    ],
    [[[0, 0]], 0],
    [
      [
        [1, 2],
        [1, 3],
        [3, 3],
        [3, 1],
        [2, 1],
        [1, 0],
      ],
      5,
    ],
    [
      [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
        [2, 1],
        [2, 2],
        [3, 2],
        [3, 3],
        [3, 4],
        [4, 3],
        [4, 4],
      ],
      10,
    ],
  ].forEach((args) => {
    const [stones, expected] = args;
    test(generateTestName(removeStones, ...args), () => {
      const result = removeStones(stones);
      expect(result).toBe(expected);
    });
  });
});
