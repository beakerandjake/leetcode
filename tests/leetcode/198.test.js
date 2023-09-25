import { rob } from '../../src/leetcode/198.js';
import {arrToStr} from '../util.js';

describe('198. House Robber', () => {
  [
    [[1,2,3,1], 4],
    [[2,7,9,3,1], 12],
  ].forEach(([input,expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = rob(input);
      expect(result).toBe(expected)
    });
  });
});