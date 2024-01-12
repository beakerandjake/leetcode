import { generateTrees } from '../src/leetcode/95.js';
import { arrToStr } from './util.js';
import { bstToArr } from './leetcode/util.js';

describe('95. Unique Binary Search Trees II', () => {
  [
    [
      3,
      [
        [1, null, 2, null, 3, null, null],
        [1, null, 3, 2, null, null, null],
        [2, 1, 3, null, null, null, null],
        [3, 1, null, null, 2, null, null],
        [3, 2, null, 1, null, null, null],
      ],
    ],
  ].forEach(([n, expected]) => {
    test(`${n} -> ${arrToStr(expected)}`, () => {
      const result = generateTrees(n);
      expect(result?.map(bstToArr)).toEqual(expected);
    });
  });
});
