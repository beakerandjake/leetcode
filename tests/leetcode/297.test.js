import { serialize, deserialize } from '../../src/leetcode/297.js';
import { arrToStr } from '../util.js';
import { arrToBst, bstToArr, trimEnd } from './util.js';

describe('297. Serialize and Deserialize Binary Tree', () => {
  [
    [
      [1, 2, 3, null, null, 4, 5],
      [1, 2, 3, null, null, 4, 5],
    ],
    [
      [3, 2, 4, 3],
      [3, 2, 4, 3],
    ],
    [[1], [1]],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = deserialize(serialize(arrToBst(input)));
      expect(trimEnd(bstToArr(result))).toEqual(expected);
    });
  });
});
