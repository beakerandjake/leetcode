import { buildArray } from '../src/1920.js';
import { arrToStr } from './util.js';

describe('1920. Build Array from Permutation', () => {
  [
    [
      [0, 2, 1, 5, 3, 4],
      [0, 1, 2, 4, 5, 3],
    ],
    [
      [5, 0, 1, 2, 3, 4],
      [4, 5, 0, 1, 2, 3],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = buildArray(input);
      expect(result).toEqual(expected);
    });
  });
});
