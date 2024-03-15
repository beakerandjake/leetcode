import { partition } from '../src/86.js';
import { arrToStr, arrToList, listToArr } from './util.js';

describe('86. Partition List', () => {
  [
    [[1, 4, 3, 2, 5, 2], 3, [1, 2, 2, 4, 3, 5]],
    [[2, 1], 2, [1, 2]],
  ].forEach(([input, x, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = partition(arrToList(input), x);
      expect(listToArr(result)).toEqual(expected);
    });
  });
});
