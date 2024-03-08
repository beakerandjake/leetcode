import { NumArray } from '../src/303.js';
import { arrToStr } from './util.js';

describe('303. Range Sum Query - Immutable', () => {
  [
    [
      [-2, 0, 3, -5, 2, -1],
      [
        [0, 2],
        [2, 5],
        [0, 5],
      ],
      [1, -1, -3],
    ],
  ].forEach(([nums, args, expected]) => {
    const numArray = new NumArray(nums);
    args.forEach(([left, right], i) => {
      test(`${arrToStr(nums)},${left},${right} -> ${expected[i]}`, () => {
        const result = numArray.sumRange(left, right);
        expect(result).toBe(expected[i]);
      });
    });
  });
});
