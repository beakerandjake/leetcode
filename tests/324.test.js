import { wiggleSort } from '../src/324.js';
import { arrToStr } from './util.js';

describe('324. Wiggle Sort II', () => {
  [
    [
      [1, 5, 1, 1, 6, 4],
      [1, 6, 1, 5, 1, 4],
    ],
    [
      [1, 3, 2, 2, 3, 1],
      [2, 3, 1, 3, 1, 2],
    ],
    [
      [4, 5, 5, 6],
      [5, 6, 4, 5],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      wiggleSort(input);
      expect(input).toEqual(expected);
    });
  });
});
