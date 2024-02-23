import { findCheapestPrice } from '../src/787.js';
import { arrToStr } from './util.js';

describe('787. Cheapest Flights Within K Stops', () => {
  [
    // replace with real test data
    [
      4,
      [
        [0, 1, 100],
        [1, 2, 100],
        [2, 0, 100],
        [1, 3, 600],
        [2, 3, 200],
      ],
      0,
      3,
      1,
      700,
    ],
    [
      3,
      [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
      ],
      0,
      2,
      1,
      200,
    ],
    [
      3,
      [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
      ],
      0,
      2,
      0,
      500,
    ],
    [
      5,
      [
        [4, 1, 1],
        [1, 2, 3],
        [0, 3, 2],
        [0, 4, 10],
        [3, 1, 1],
        [1, 4, 3],
      ],
      2,
      1,
      1,
      -1,
    ],
    [
      3,
      [
        [0, 1, 2],
        [1, 2, 1],
        [2, 0, 10],
      ],
      1,
      2,
      1,
      1,
    ],
    [5, [[1, 2, 4]], 0, 4, 2, -1],
  ].forEach(([n, flights, src, dest, k, expected]) => {
    test(`${n},${arrToStr(flights)},${src},${dest},${k} -> ${expected}`, () => {
      const result = findCheapestPrice(n, flights, src, dest, k);
      expect(result).toBe(expected);
    });
  });
});
