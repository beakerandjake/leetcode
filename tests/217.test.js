import { containsDuplicate } from '../src/217.js';
import { arrToStr } from './util.js';

describe('217. Contains Duplicate', () => {
  [
    [[1, 2, 3, 1], true],
    [[1, 2, 3, 4], false],
    [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = containsDuplicate(input);
      expect(result).toBe(expected);
    });
  });
});
