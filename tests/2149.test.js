import { rearrangeArray } from '../src/2149.js';
import { arrToStr } from './util.js';

describe('2149. Rearrange Array Elements by Sign', () => {
  [
    [
      [3, 1, -2, -5, 2, -4],
      [3, -2, 1, -5, 2, -4],
    ],
    [
      [-1, 1],
      [1, -1],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = rearrangeArray(input, expected);
      expect(result).toEqual(expected);
    });
  });
});
