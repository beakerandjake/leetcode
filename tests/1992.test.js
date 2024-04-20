import { findFarmland } from '../src/1992.js';
import { generateTestName } from './util.js';

describe('1992. Find All Groups of Farmland', () => {
  [
    [
      [
        [1, 0, 0],
        [0, 1, 1],
        [0, 1, 1],
      ],
      [
        [0, 0, 0, 0],
        [1, 1, 2, 2],
      ],
    ],
    [
      [
        [1, 1],
        [1, 1],
      ],
      [[0, 0, 1, 1]],
    ],
    [[[0]], []],
  ].forEach((args) => {
    const [land, expected] = args;
    test(generateTestName(findFarmland, ...args), () => {
      const result = findFarmland(land);
      expect(result).toEqual(expected);
    });
  });
});
