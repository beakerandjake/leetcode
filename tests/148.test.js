import { sortList } from '../src/148.js';
import { arrToStr, arrToList, listToArr } from './util.js';

describe('148. Sort List', () => {
  [
    [
      [4, 2, 1, 3],
      [1, 2, 3, 4],
    ],
    [
      [9, 22, -7, 16, 44, 1, 0, 88, -50],
      [-50, -7, 0, 1, 9, 16, 22, 44, 88],
    ],
    [
      [2, 1],
      [1, 2],
    ],
    [[], []],
    [[1], [1]],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = sortList(arrToList(input));
      expect(listToArr(result)).toEqual(expected);
    });
  });
});
