import { canFinish } from '../src/207.js';
import { arrToStr } from './util.js';

describe('207. Course Schedule', () => {
  [
    [2, [[1, 0]], true],
    [
      2,
      [
        [1, 0],
        [0, 1],
      ],
      false,
    ],
    [
      3,
      [
        [1, 0],
        [0, 2],
        [2, 1],
      ],
      false,
    ],
    [2, [[0, 1]], true],
  ].forEach(([numCourses, prerequisites, expected]) => {
    test(`${numCourses},${arrToStr(prerequisites)} -> ${expected}`, () => {
      const result = canFinish(numCourses, prerequisites);
      expect(result).toBe(expected);
    });
  });
});
