import { intersection } from '../src/349.js';
import { arrToStr } from './util.js';

describe('349. Intersection of Two Arrays', () => {
  [
    [[1, 2, 2, 1], [2, 2], [2]],
    [
      [4, 9, 5],
      [9, 4, 9, 8, 4],
      [9, 4],
    ],
  ].forEach(([a, b, expected]) => {
    test(`${arrToStr(a)},${arrToStr(b)} -> ${arrToStr(expected)}`, () => {
      const result = intersection(a, b);
      expect(result).toEqual(expected);
    });
  });
});
