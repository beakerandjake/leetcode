import { intersect } from '../src/350.js';
import { arrToStr } from './util.js';

describe('350. Intersection of Two Arrays II', () => {
  [
    [
      [1, 2, 2, 1],
      [2, 2],
      [2, 2],
    ],
    [
      [4, 9, 5],
      [9, 4, 9, 8, 4],
      [4, 9],
    ],
  ].forEach(([a, b, expected]) => {
    test(`${arrToStr(a)},${arrToStr(b)} -> ${arrToStr(expected)}`, () => {
      const result = intersect(a, b);
      expect(result).toEqual(expected);
    });
  });
});
