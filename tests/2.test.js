import { addTwoNumbers } from '../src/2.js';
import { arrToStr, arrToList, listToArr } from './util.js';

describe('2. Add Two Numbers', () => {
  [
    [
      [2, 4, 3],
      [5, 6, 4],
      [7, 0, 8],
    ],
    [[0], [0], [0]],
    [
      [9, 9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9],
      [8, 9, 9, 9, 0, 0, 0, 1],
    ],
    [
      [
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1,
      ],
      [5, 6, 4],
      [
        6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1,
      ],
    ],
    [
      [2, 4, 6],
      [5, 6, 4],
      [7, 0, 1, 1],
    ],
  ].forEach(([a, b, expected]) => {
    test(`${arrToStr(a)}.${arrToStr(b)} -> ${arrToStr(expected)}`, () => {
      const result = addTwoNumbers(arrToList(a), arrToList(b));
      expect(listToArr(result)).toEqual(expected);
    });
  });
});
