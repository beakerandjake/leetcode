import { nextGreaterElement } from '../src/496.js';
import { arrToStr } from './util.js';

describe('496. Next Greater Element I', () => {
  [
    [
      [4, 1, 2],
      [1, 3, 4, 2],
      [-1, 3, -1],
    ],
    [
      [2, 4],
      [1, 2, 3, 4],
      [3, -1],
    ],
  ].forEach(([nums1, nums2, expected]) => {
    test(`${arrToStr(nums1)},${arrToStr(nums2)} -> ${arrToStr(expected)}`, () => {
      const result = nextGreaterElement(nums1, nums2);
      expect(result).toEqual(expected);
    });
  });
});
