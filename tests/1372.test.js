import { longestZigZag } from '../src/1372.js';
import { arrToStr, arrToBst } from './util.js';

describe('1372. Longest ZigZag Path in a Binary Tree', () => {
  [[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3]].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = longestZigZag(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
