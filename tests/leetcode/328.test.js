import { oddEvenList } from '../../src/leetcode/328.js';
import { arrToStr } from '../util.js';
import { arrayToLinkedList, linkedListToArray } from './util.js';

describe('328. Odd Even Linked List', () => {
  [
    [
      [1, 2, 3, 4, 5],
      [1, 3, 5, 2, 4],
    ],
    [
      [2, 1, 3, 5, 6, 4, 7],
      [2, 3, 6, 7, 1, 5, 4],
    ],
    [
      [1, 2, 3],
      [1, 3, 2],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = oddEvenList(arrayToLinkedList(input));
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
