import { construct2DArray } from '../src/2022.js';
import { generateTestName } from './util.js';

describe('2022. Convert 1D Array Into 2D Array', () => {
  [
    [
      [1, 2, 3, 4],
      2,
      2,
      [
        [1, 2],
        [3, 4],
      ],
    ],
    [[1, 2, 3], 1, 3, [[1, 2, 3]]],
    [[1, 2], 1, 1, []],
  ].forEach((args) => {
    const [original, m, n, expected] = args;
    test(generateTestName(construct2DArray, ...args), () => {
      const result = construct2DArray(original, m, n);
      expect(result).toEqual(expected);
    });
  });
});
