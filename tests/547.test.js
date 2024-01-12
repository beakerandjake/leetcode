import { findCircleNum } from '../src/547.js';
import { arrToStr } from './util.js';

describe('547. Number of Provinces', () => {
  [
    [
      [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
      ],
      2,
    ],
    [
      [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ],
      3,
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = findCircleNum(input);
      expect(result).toBe(expected);
    });
  });
});
