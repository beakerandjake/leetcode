import { invertTree } from '../src/226.js';
import { arrToStr, bstToArr, arrToBst, trimEnd } from './util.js';

describe('226. Invert Binary Tree', () => {
  [
    [
      [4, 2, 7, 1, 3, 6, 9],
      [4, 7, 2, 9, 6, 3, 1],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = invertTree(arrToBst(input));
      expect(trimEnd(bstToArr(result))).toEqual(expected);
    });
  });
});
