import { canJump } from '../../src/leetcode/jumpGame_55.js';
import { arrToStr } from '../util.js';

describe('55. Jump Game', () => {
  [
    [[2, 3, 1, 1, 4], true],
    [[3, 2, 1, 0, 4], false],
  ].forEach(([array, expected]) => {
    test(`${arrToStr(array)} -> ${expected}`, () => {
      const result = canJump(array);
      expect(result).toEqual(expected);
    });
  });
});
