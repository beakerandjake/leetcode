import { removeElements } from '../src/203.js';
import { arrToStr, arrayToLinkedList, linkedListToArray } from './util.js';

describe('203. Remove Linked List Elements', () => {
  [
    [[1, 2, 6, 3, 4, 5, 6], 6, [1, 2, 3, 4, 5]],
    [[], 1, []],
    [[7, 7, 7, 7], 7, []],
  ].forEach(([input, value, expected]) => {
    test(`${arrToStr(input)},${value} -> ${arrToStr(expected)}`, () => {
      const result = removeElements(arrayToLinkedList(input), value);
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
