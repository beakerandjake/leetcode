import { removeNthFromEnd } from '../../src/leetcode/19.js';
import { arrToStr } from '../util.js';
import { arrayToLinkedList, linkedListToArray } from './util.js';

describe('19. Remove Nth Node From End of List', () => {
  [
    [[1, 2, 3, 4, 5], 2, [1, 2, 3, 5]],
    [[1], 1, []],
    [[1, 2], 1, [1]],
  ].forEach(([input, n, expected]) => {
    test(`${arrToStr(input)},${n} -> ${arrToStr(expected)}`, () => {
      const result = removeNthFromEnd(arrayToLinkedList(input), n);
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
