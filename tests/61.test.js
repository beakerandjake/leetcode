import { rotateRight } from '../src/61.js';
import { arrToStr, listToArr, arrToList } from './util.js';

describe('61. Rotate List', () => {
  [
    [[1, 2, 3, 4, 5], 2, [4, 5, 1, 2, 3]],
    [[0, 1, 2], 4, [2, 0, 1]],
    [[1, 2], 1, [2, 1]],
  ].forEach(([input, k, expected]) => {
    test(`${arrToStr(input)},${k} -> ${expected}`, () => {
      const result = rotateRight(arrToList(input), k);
      expect(listToArr(result)).toEqual(expected);
    });
  });
});
