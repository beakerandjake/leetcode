import { mergeInBetween } from '../src/1669.js';
import { arrToList, arrToStr, listToArr } from './util.js';

describe('1669. Merge In Between Linked Lists', () => {
  [
    [
      [10, 1, 13, 6, 9, 5],
      3,
      4,
      [1000000, 1000001, 1000002],
      [10, 1, 13, 1000000, 1000001, 1000002, 5],
    ],
    [
      [0, 1, 2, 3, 4, 5, 6],
      2,
      5,
      [1000000, 1000001, 1000002, 1000003, 1000004],
      [0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6],
    ],
  ].forEach(([l1, a, b, l2, expected]) => {
    test(`${arrToStr(l1)},${a},${b},${arrToStr(l2)} -> ${expected}`, () => {
      const result = mergeInBetween(arrToList(l1), a, b, arrToList(l2));
      expect(listToArr(result)).toEqual(expected);
    });
  });
});
