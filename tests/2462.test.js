import { totalCost } from '../src/leetcode/2462.js';
import { arrToStr } from './util.js';

describe('2462. Total Cost to Hire K Workers', () => {
  [
    [[17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4, 11],
    [[1, 2, 4, 1], 3, 3, 4],
    [
      [
        50, 80, 34, 9, 86, 20, 67, 94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79,
        25, 89, 55, 67, 84, 3, 79, 38, 16, 44, 2, 54, 58,
      ],
      7,
      12,
      95,
    ],
    [
      [
        18, 64, 12, 21, 21, 78, 36, 58, 88, 58, 99, 26, 92, 91, 53, 10, 24, 25, 20, 92,
        73, 63, 51, 65, 87, 6, 17, 32, 14, 42, 46, 65, 43, 9, 75,
      ],
      13,
      23,
      223,
    ],
  ].forEach(([costs, k, m, expected]) => {
    test(`${arrToStr(costs)},${k},${m},${expected} -> ${expected}`, () => {
      const result = totalCost(costs, k, m);
      expect(result).toBe(expected);
    });
  });
});
