import { insertIntoBST } from '../src/leetcode/701.js';
import { arrToStr } from './util.js';
import { arrToBst, bstToArr, trimEnd } from './leetcode/util.js';

describe('701. Insert into a Binary Search Tree', () => {
  [
    [[4, 2, 7, 1, 3], 5, [4, 2, 7, 1, 3, 5]],
    [[40, 20, 60, 10, 30, 50, 70], 25, [40, 20, 60, 10, 30, 50, 70, null, null, 25]],
    [[4, 2, 7, 1, 3, null, null, null, null, null, null], 5, [4, 2, 7, 1, 3, 5]],
  ].forEach(([input, val, expected]) => {
    test(`${arrToStr(input)},${val}-> ${arrToStr(expected)}`, () => {
      const result = insertIntoBST(arrToBst(input), val);
      expect(trimEnd(bstToArr(result))).toEqual(expected);
    });
  });
});
