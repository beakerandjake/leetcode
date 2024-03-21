import { findMode } from '../src/501.js';
import { arrToBst, arrToStr } from './util.js';

describe('501. Find Mode in Binary Search Tree', () => {
  [
    [[1, null, 2, 2], [2]],
    [[0], [0]],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = findMode(arrToBst(input));
      expect(result).toEqual(expected);
    });
  });
});
