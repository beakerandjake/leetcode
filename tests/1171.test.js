import { removeZeroSumSublists } from '../src/1171.js';
import { arrToStr, arrToList, listToArr } from './util.js';

describe('1171. Remove Zero Sum Consecutive Nodes from Linked List', () => {
  [
    [
      [1, 2, -3, 3, 1],
      [3, 1],
    ],
    [
      [1, 2, 3, -3, 4],
      [1, 2, 4],
    ],
    [[1, 2, 3, -3, -2], [1]],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = removeZeroSumSublists(arrToList(input));
      expect(listToArr(result)).toEqual(expected);
    });
  });
});
