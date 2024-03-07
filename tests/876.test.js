import { middleNode } from '../src/876.js';
import { arrToStr, arrayToLinkedList, linkedListToArray } from './util.js';

describe('876. Middle of the Linked List', () => {
  [
    [
      [1, 2, 3, 4, 5],
      [3, 4, 5],
    ],
    [
      [1, 2, 3, 4, 5, 6],
      [4, 5, 6],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = middleNode(arrayToLinkedList(input));
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
