import { reverseList } from '../src/206.js';
import { arrToStr, arrToList, listToArr } from './util.js';

describe('206. Reverse Linked List', () => {
  [
    [
      [1, 2, 3, 4, 5],
      [5, 4, 3, 2, 1],
    ],
    [
      [1, 2],
      [2, 1],
    ],
    [[], []],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = reverseList(arrToList(input));
      expect(listToArr(result)).toEqual(expected);
    });
  });
});
