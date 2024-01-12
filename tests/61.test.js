import { rotateRight } from '../src/leetcode/61.js';
import { arrToStr } from './util.js';
import { linkedListToArray, arrayToLinkedList } from './leetcode/util.js';

describe('61. Rotate List', () => {
  [
    [[1, 2, 3, 4, 5], 2, [4, 5, 1, 2, 3]],
    [[0, 1, 2], 4, [2, 0, 1]],
  ].forEach(([input, k, expected]) => {
    test(`${arrToStr(input)},${k} -> ${expected}`, () => {
      const result = rotateRight(arrayToLinkedList(input), k);
      expect(linkedListToArray(result)).toEqual(expected);
    });
  });
});
