import { findErrorNums } from '../src/645.js';
import { generateTestName } from './util.js';

describe('645. Set Mismatch', () => {
  [
    [
      [1, 2, 2, 4],
      [2, 3],
    ],
    [
      [1, 1],
      [1, 2],
    ],
  ].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(findErrorNums, ...args), () => {
      const result = findErrorNums(input);
      expect(result).toEqual(expected);
    });
  });
});
