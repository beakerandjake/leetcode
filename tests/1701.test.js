import { averageWaitingTime } from '../src/1701.js';
import { generateTestName } from './util.js';

describe('1701. Average Waiting Time', () => {
  [
    [
      [
        [1, 2],
        [2, 5],
        [4, 3],
      ],
      5,
    ],
    [
      [
        [5, 2],
        [5, 4],
        [10, 3],
        [20, 1],
      ],
      3.25,
    ],
  ].forEach((args) => {
    const [customers, expected] = args;
    test(generateTestName(averageWaitingTime, ...args), () => {
      const result = averageWaitingTime(customers);
      expect(result).toBe(expected);
    });
  });
});
