import { generateTrees } from '../src/95.js';
import { arrToStr, bstToArr } from './util.js';

describe('95. Unique Binary Search Trees II', () => {
  [
    [
      3,
      [
        [1, null, 2, null, 3],
        [1, null, 3, 2],
        [2, 1, 3],
        [3, 1, null, null, 2],
        [3, 2, null, 1],
      ],
    ],
  ].forEach(([n, expected]) => {
    test(`${n} -> ${arrToStr(expected)}`, () => {
      const result = generateTrees(n);
      expect(result?.map(bstToArr)).toEqual(expected);
    });
  });
});
