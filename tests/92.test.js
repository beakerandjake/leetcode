import { reverseBetween } from '../src/92.js';
import { arrToStr, arrToList, listToArr } from './util.js';

describe('92. Reverse Linked List II', () => {
  [
    [[1, 2, 3, 4, 5], 2, 4, [1, 4, 3, 2, 5]],
    [[5], 1, 1, [5]],
    [[3, 5], 1, 2, [5, 3]],
  ].forEach(([input, left, right, expected]) => {
    test(`${arrToStr(input)},${left},${right} -> ${arrToStr(input)}`, () => {
      const result = reverseBetween(arrToList(input), left, right);
      expect(listToArr(result)).toEqual(expected);
    });
  });
});
