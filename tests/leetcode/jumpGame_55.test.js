import { canJump } from '../../src/leetcode/jumpGame_55.js';
import { arrToStr } from '../util.js';

describe('55. Jump Game', () => {
  [
    [[2, 3, 1, 1, 4], true],
    [[3, 2, 1, 0, 4], false],
    [[2, 0, 0], true],
    [[1, 2, 0, 1], true],
    [[0, 2, 3], false],
  ].forEach(([array, expected]) => {
    test(`${arrToStr(array)} -> ${expected}`, () => {
      const result = canJump(array);
      expect(result).toEqual(expected);
    });
  });
});
