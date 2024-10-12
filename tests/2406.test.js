import { minGroups } from '../src/2406.js';
import { generateTestName } from './util.js';

describe('2406. Divide Intervals Into Minimum Number of Groups', () => {
  [
    [
      [
        [5, 10],
        [6, 8],
        [1, 5],
        [2, 3],
        [1, 10],
      ],
      3,
    ],
    [
      [
        [1, 3],
        [5, 6],
        [8, 10],
        [11, 13],
      ],
      1,
    ],
    [
      [
        [441459, 446342],
        [801308, 840640],
        [871890, 963447],
        [228525, 336985],
        [807945, 946787],
        [479815, 507766],
        [693292, 944029],
        [751962, 821744],
      ],
      4,
    ],
  ].forEach((args) => {
    const [intervals, expected] = args;
    test(generateTestName(minGroups, ...args), () => {
      const result = minGroups(intervals);
      expect(result).toBe(expected);
    });
  });
});
