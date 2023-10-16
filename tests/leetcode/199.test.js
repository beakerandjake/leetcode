import { rightSideView } from '../../src/leetcode/199.js';
import { arrToStr } from '../util.js';
import { arrToBst } from './util';

describe('199. Binary Tree Right Side View', () => {
  [
    [
      [1, 2, 3, null, 5, null, 4],
      [1, 3, 4],
    ],
    [
      [1, null, 3],
      [1, 3],
    ],
    [[], []],
    [
      [1, 2, 3, 4],
      [1, 3, 4],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = rightSideView(arrToBst(input));
      expect(result).toEqual(expected);
    });
  });
});
