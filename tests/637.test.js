import { averageOfLevels } from '../src/leetcode/637.js';
import { arrToStr } from './util.js';
import { arrToBst } from './leetcode/util.js';

describe('637. Average of Levels in Binary Tree', () => {
  [
    [
      [3, 9, 20, null, null, 15, 7],
      [3.0, 14.5, 11.0],
    ],
    // [
    //   [3, 9, 20, 15, 7],
    //   [3.0, 14.5, 11.0],
    // ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = averageOfLevels(arrToBst(input));
      expect(result).toEqual(expected);
    });
  });
});
