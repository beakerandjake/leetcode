import { reverseList } from '../../src/leetcode/206.js';
import { arrToStr } from '../util.js';
import { arrayToLinkedList, linkedListToArray } from './util.js';

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
      const result = reverseList(arrayToLinkedList(input));
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
