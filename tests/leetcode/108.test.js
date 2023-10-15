import { sortedArrayToBST } from '../../src/leetcode/108.js';
import { arrToStr } from '../util.js';
import { bstToArr, arrToBst, trimEnd } from './util.js';

describe('108. Convert Sorted Array to Binary Search Tree', () => {
  [
    [
      [-10, -3, 0, 5, 9],
      [0,-3,9,-10,null,5]    ],
    [
      [1, 3],
      [3, 1],
    ],
    [
      [0, 1, 2, 3, 4, 5],
      [3, 1, 5, 0, 2, 4],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = sortedArrayToBST(input);
      expect(trimEnd(bstToArr(result))).toEqual(expected);
    });
  });
});
