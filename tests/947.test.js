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
  ].forEach((args) => {
    const [stones, expected] = args;
    test(generateTestName(removeStones, ...args), () => {
      const result = removeStones(stones);
      expect(result).toBe(expected);
    });
  });
});
