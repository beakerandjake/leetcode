import { flatten } from '../src/114.js';
import { arrToStr, arrToBst, bstToArr, trimEnd } from './util.js';

describe('114. Flatten Binary Tree to Linked List', () => {
  [
    [
      [1, 2, 5, 3, 4, null, 6],
      [1, null, 2, null, 3, null, 4, null, 5, null, 6],
    ],
    [[], []],
    [[0], [0]],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = flatten(arrToBst(input));
      expect(trimEnd(bstToArr(result))).toEqual(expected);
    });
  });
});
