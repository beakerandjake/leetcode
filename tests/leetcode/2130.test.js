import { pairSum } from '../../src/leetcode/2130.js';
import { arrToStr } from '../util.js';
import { arrayToLinkedList } from './util.js';

describe('2130. Maximum Twin Sum of a Linked List', () => {
  [
    [[5, 4, 2, 1], 6],
    [[4, 2, 2, 3], 7],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = pairSum(arrayToLinkedList(input));
      expect(result).toBe(expected);
    });
  });
});