import { threeSum } from '../src/leetcode/15.js';
import { arrToStr } from './util.js';

describe('15. 3Sum', () => {
  [
    [
      [-1, 0, 1, 2, -1, -4],
      [
        [-1, 0, 1],
        [-1, -1, 2],
      ],
    ],
    [[0, 1, 1], []],
    [[0, 0, 0], [[0, 0, 0]]],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = threeSum(input);
      expect(result).toEqual(expected);
    });
  });
});
