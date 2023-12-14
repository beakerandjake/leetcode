import { wiggleSort } from '../../src/leetcode/280.js';
import { arrToStr } from '../util.js';

describe('280. Wiggle Sort', () => {
  [
    [
      [3, 5, 2, 1, 6, 4],
      [1, 6, 2, 5, 3, 4],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      wiggleSort(input);
      expect(input).toEqual(expected);
    });
  });
});
