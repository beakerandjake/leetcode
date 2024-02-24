import { deleteDuplicates } from '../src/83.js';
import { arrToStr, arrayToLinkedList, linkedListToArray } from './util.js';

describe('83. Remove Duplicates from Sorted List', () => {
  [
    [
      [1, 1, 2],
      [1, 2],
    ],
    [
      [1, 1, 2, 3, 3],
      [1, 2, 3],
    ],
    [[1, 1, 1], [1]],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = deleteDuplicates(arrayToLinkedList(input));
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
