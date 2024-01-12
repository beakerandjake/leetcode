import { hIndex } from '../src/274.js';
import { arrToStr } from './util.js';

describe('274. H-Index', () => {
  [
    [[3, 0, 6, 1, 5], 3],
    [[1, 3, 1], 1],
    [[100], 1],
    [[11, 15], 2],
    [[6, 6, 4, 8, 4, 3, 3, 10], 4],
  ].forEach(([array, expected]) => {
    test(`${arrToStr(array)} -> ${expected}`, () => {
      const result = hIndex(array);
      expect(result).toEqual(expected);
    });
  });
});
