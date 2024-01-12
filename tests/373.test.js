import { kSmallestPairs } from '../src/leetcode/373.js';
import { arrToStr } from './util.js';

describe('373. Find K Pairs with Smallest Sums', () => {
  [
    [
      [1, 7, 11],
      [2, 4, 6],
      3,
      [
        [1, 2],
        [1, 4],
        [1, 6],
      ],
    ],
    [
      [1, 1, 2],
      [1, 2, 3],
      2,
      [
        [1, 1],
        [1, 1],
      ],
    ],
    [
      [1, 2],
      [3],
      3,
      [
        [1, 3],
        [2, 3],
      ],
    ],
  ].forEach(([a, b, k, expected]) => {
    test(`${arrToStr(a)},${arrToStr(b)},${k} -> ${arrToStr(expected)}`, () => {
      const result = kSmallestPairs(a, b, k);
      expect(result).toIncludeAllMembers(expected);
    });
  });
});
