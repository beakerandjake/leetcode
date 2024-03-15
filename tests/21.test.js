import { mergeTwoLists } from '../src/21.js';
import { arrToStr, arrToList, listToArr } from './util.js';

describe('21. Merge Two Sorted Lists', () => {
  [
    [
      [1, 2, 4],
      [1, 3, 4],
      [1, 1, 2, 3, 4, 4],
    ],
    [[], [], []],
    [[], [0], [0]],
  ].forEach(([a, b, expected]) => {
    test(`${arrToStr(a)},${arrToStr(b)} -> ${arrToStr(expected)}`, () => {
      const result = mergeTwoLists(arrToList(a), arrToList(b));
      expect(listToArr(result)).toEqual(expected);
    });
  });
});
