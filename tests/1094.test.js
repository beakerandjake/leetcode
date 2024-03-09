import { carPooling } from '../src/1094.js';
import { arrToStr } from './util.js';

describe('1094. Car Pooling', () => {
  [
    [
      [
        [2, 1, 5],
        [3, 3, 7],
      ],
      4,
      false,
    ],
    [
      [
        [2, 1, 5],
        [3, 3, 7],
      ],
      5,
      true,
    ],
    [
      [
        [3, 3, 7],
        [3, 10, 20],
        [3, 3, 7],
        [2, 1, 3],
        [3, 3, 7],
        [3, 3, 7],
      ],
      30,
      true,
    ],
    [
      [
        [10, 5, 7],
        [10, 3, 4],
        [7, 1, 8],
        [6, 3, 4],
      ],
      24,
      true,
    ],
    [
      [
        [9, 0, 1],
        [3, 3, 7],
      ],
      4,
      false,
    ],
  ].forEach(([trips, capacity, expected]) => {
    test(`${arrToStr(trips)},${capacity} -> ${expected}`, () => {
      const result = carPooling(trips, capacity);
      expect(result).toBe(expected);
    });
  });
});
