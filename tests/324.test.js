import { wiggleSort } from '../src/324.js';
import { arrToStr } from './util.js';

describe('324. Wiggle Sort II', () => {
  [
    [
      [1, 5, 1, 1, 6, 4],
      [1, 6, 1, 5, 1, 4],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = wiggleSort(input);
      expect(result).toEqual(expected);
    });
  });
});
