import { subsets } from '../src/leetcode/78.js';
import { arrToStr } from './util.js';

describe('78. Subsets', () => {
  [
    [
      [1, 2, 3],
      [[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []],
    ],
    [[0], [[0], []]],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = subsets(input);
      expect(result).toEqual(expected);
    });
  });
});
