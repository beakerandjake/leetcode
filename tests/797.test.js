import { allPathsSourceTarget } from '../src/leetcode/797.js';
import { arrToStr } from './util.js';

describe('797. All Paths From Source to Target', () => {
  [
    [
      [[1, 2], [3], [3], []],
      [
        [0, 1, 3],
        [0, 2, 3],
      ],
    ],
    [
      [[4, 3, 1], [3, 2, 4], [3], [4], []],
      [
        [0, 4],
        [0, 3, 4],
        [0, 1, 3, 4],
        [0, 1, 2, 3, 4],
        [0, 1, 4],
      ],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = allPathsSourceTarget(input);
      expect(result).toEqual(expected);
    });
  });
});
