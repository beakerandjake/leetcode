import { findOrder } from '../src/210.js';
import { arrToStr } from './util.js';

describe('210. Course Schedule II', () => {
  [
    [2, [[1, 0]], [0, 1]],
    [
      4,
      [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ],
      [0, 1, 2, 3],
    ],
  ].forEach(([numCourses, prerequisites, expected]) => {
    test(`${numCourses},${arrToStr(prerequisites)}-> ${arrToStr(expected)}`, () => {
      const result = findOrder(numCourses, prerequisites);
      expect(result).toEqual(expected);
    });
  });
});
