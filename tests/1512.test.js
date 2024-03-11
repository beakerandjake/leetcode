import { numIdenticalPairs } from '../src/1512.js';
import { arrToStr } from './util.js';

describe('1512. Number of Good Pairs', () => {
  [
    [[1, 2, 3, 1, 1, 3], 4],
    [[1, 1, 1, 1], 6],
    [[1, 2, 3], 0],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = numIdenticalPairs(input);
      expect(result).toBe(expected);
    });
  });
});
