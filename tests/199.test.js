import { rightSideView } from '../src/199.js';
import { arrToStr, arrToBst } from './util.js';

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
