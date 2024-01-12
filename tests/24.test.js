import { swapPairs } from '../src/24.js';
import { arrToStr } from './util.js';
import { arrayToLinkedList, linkedListToArray } from './util.js';

describe('24. Swap Nodes In Pairs', () => {
  [
    [
      [1, 2, 3, 4],
      [2, 1, 4, 3],
    ],
    [
      [6, 9, 7, 8, 22, 44, 10],
      [9, 6, 8, 7, 44, 22, 10],
    ],
    [[], []],
    [[1], [1]],
    [
      [1, 2],
      [2, 1],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = swapPairs(arrayToLinkedList(input));
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
