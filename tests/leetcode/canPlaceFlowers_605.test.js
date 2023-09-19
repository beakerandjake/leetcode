import { canPlaceFlowers } from '../../src/leetcode/canPlaceFlowers_605.js';
import { arrToStr } from '../util.js';

describe('605. Can Place Flowers', () => {
  [
    [[1, 0, 0, 0, 1], 1, true],
    [[1, 0, 0, 0, 1], 2, false],
    [[1, 0, 0, 0, 0, 1], 2, false],
    [[0], 1, true],
  ].forEach(([flowerbed, n, expected]) => {
    test(`${arrToStr(flowerbed)},${n}->${expected}`, () => {
      const result = canPlaceFlowers(flowerbed, n);
      expect(result).toEqual(expected);
    });
  });
});
