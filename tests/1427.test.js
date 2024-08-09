import { stringShift } from '../src/1427.js';
import { generateTestName } from './util.js';

describe('1427. Perform String Shifts', () => {
  [
    [
      'abc',
      [
        [0, 1],
        [1, 2],
      ],
      'cab',
    ],
    [
      'abcdefg',
      [
        [1, 1],
        [1, 1],
        [0, 2],
        [1, 3],
      ],
      'efgabcd',
    ],
  ].forEach((args) => {
    const [s, shift, expected] = args;
    test(generateTestName(stringShift, ...args), () => {
      const result = stringShift(s, shift);
      expect(result).toBe(expected);
    });
  });
});
