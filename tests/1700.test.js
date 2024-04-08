import { countStudents } from '../src/1700.js';
import { generateTestName } from './util.js';

describe('1700. Number of Students Unable to Eat Lunch', () => {
  [
    [[1, 1, 0, 0], [0, 1, 0, 1], 0],
    [[1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1], 3],
  ].forEach((args) => {
    const [students, sandwiches, expected] = args;
    test(generateTestName(countStudents, ...args), () => {
      const result = countStudents(students, sandwiches);
      expect(result).toBe(expected);
    });
  });
});
