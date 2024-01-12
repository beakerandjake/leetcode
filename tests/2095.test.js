import { deleteMiddle } from '../src/leetcode/2095.js';
import { arrToStr } from './util.js';
import { linkedListToArray, arrayToLinkedList } from './leetcode/util.js';

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
      const result = deleteMiddle(arrayToLinkedList(input));
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
