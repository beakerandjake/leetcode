import { dailyTemperatures } from '../src/leetcode/739.js';
import { arrToStr } from './util.js';

describe('739. Daily Temperatures', () => {
  [
    [
      [73, 74, 75, 71, 69, 72, 76, 73],
      [1, 1, 4, 2, 1, 1, 0, 0],
    ],
    [
      [30, 40, 50, 60],
      [1, 1, 1, 0],
    ],
    [
      [30, 60, 90],
      [1, 1, 0],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = dailyTemperatures(input);
      expect(result).toEqual(expected);
    });
  });
});
