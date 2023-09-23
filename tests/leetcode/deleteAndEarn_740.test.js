import { deleteAndEarn } from '../../src/leetcode/deleteAndEarn_740.js';
import { arrToStr } from '../util.js';

describe('740. Delete and Earn', () => {
  [
    [[3, 4, 2], 6],
    [[2, 2, 3, 3, 3, 4], 9],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = deleteAndEarn(input);
      expect(result).toEqual(expected);
    });
  });
});
