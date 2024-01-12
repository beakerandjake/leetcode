import { mergeKLists } from '../src/23.js';
import { arrToStr } from './util.js';
import { arrayToLinkedList, linkedListToArray } from './util.js';

describe('23. Merge k Sorted Lists', () => {
  [
    [
      [
        [1, 4, 5],
        [1, 3, 4],
        [2, 6],
      ],
      [1, 1, 2, 3, 4, 4, 5, 6],
    ],
    [[], []],
    [[[]], []],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = mergeKLists(input.map(arrayToLinkedList));
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
