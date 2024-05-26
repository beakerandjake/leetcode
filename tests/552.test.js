import { checkRecord } from '../src/552.js';
import { generateTestName } from './util.js';

describe('552. Student Attendance Record II', () => {
  [
    [2, 8],
    [1, 3],
    [10101, 183236316],
  ].forEach((args) => {
    const [n, expected] = args;
    test(generateTestName(checkRecord, ...args), () => {
      const result = checkRecord(n);
      expect(result).toBe(expected);
    });
  });
});
