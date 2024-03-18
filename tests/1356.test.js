import { sortByBits } from '../src/1356.js';
import { arrToStr } from './util.js';

describe('1356. Sort Integers by The Number of 1 Bits', () => {
  [
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8],
      [0, 1, 2, 4, 8, 3, 5, 6, 7],
    ],
    [
      [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1],
      [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = sortByBits(input);
      expect(result).toEqual(expected);
    });
  });
});
