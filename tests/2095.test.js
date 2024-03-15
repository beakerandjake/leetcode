import { deleteMiddle } from '../src/2095.js';
import { arrToStr, listToArr, arrToList } from './util.js';

describe('2095. Delete the Middle Node of a Linked List', () => {
  [
    [
      [1, 3, 4, 7, 1, 2, 6],
      [1, 3, 4, 1, 2, 6],
    ],
    [
      [1, 2, 3, 4],
      [1, 2, 4],
    ],
    [[2, 1], [2]],
    [[1], []],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = deleteMiddle(arrToList(input));
      expect(listToArr(result)).toEqual(expected);
    });
  });
});
