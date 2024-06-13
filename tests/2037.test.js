import { minMovesToSeat } from '../src/2037.js';
import { generateTestName } from './util.js';

describe('2037. Minimum Number of Moves to Seat Everyone', () => {
  [
    [[3, 1, 5], [2, 7, 4], 4],
    [[4, 1, 5, 9], [1, 3, 2, 6], 7],
    [[2, 2, 6, 6], [1, 3, 2, 6], 4],
  ].forEach((args) => {
    const [seats, students, expected] = args;
    test(generateTestName(minMovesToSeat, ...args), () => {
      const result = minMovesToSeat(seats, students);
      expect(result).toBe(expected);
    });
  });
});
