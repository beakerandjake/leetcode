import { getCommon } from '../src/2540.js';
import { arrToStr } from './util.js';

describe('2540. Minimum Common Value', () => {
  [
    [[1, 2, 3], [2, 4], 2],
    [[1, 2, 3, 6], [2, 3, 4, 5], 2],
  ].forEach(([a, b, expected]) => {
    test(`${arrToStr(a)},${arrToStr(b)} -> ${expected}`, () => {
      const result = getCommon(a, b);
      expect(result).toEqual(expected);
    });
  });
});
