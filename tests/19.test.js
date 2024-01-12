import { removeNthFromEnd } from '../src/19.js';
import { arrToStr, arrayToLinkedList, linkedListToArray } from './util.js';

describe('19. Remove Nth Node From End of List', () => {
  [
    // [[1, 2, 3, 4, 5], 2, [1, 2, 3, 5]],
    // [[1], 1, []],
    // [[1, 2], 1, [1]],
    // [[1, 2, 3, 4, 5], 1, [1, 2, 3, 4]],
    // [[1, 2, 3, 4, 5], 2, [1, 2, 3, 5]],
    // [[1, 2, 3, 4, 5], 3, [1, 2, 4, 5]],
    // [[1, 2, 3, 4, 5], 4, [1, 3, 4, 5]],
    [[1, 2, 3, 4, 5], 5, [2, 3, 4, 5]],
  ].forEach(([input, n, expected]) => {
    test(`${arrToStr(input)},${n} -> ${arrToStr(expected)}`, () => {
      const result = removeNthFromEnd(arrayToLinkedList(input), n);
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
