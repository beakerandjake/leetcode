import { findComplement } from '../src/476.js';
import { generateTestName } from './util.js';

describe('476. Number Complement', () => {
  [
    [5, 2],
    [1, 0],
    [393292, 130995],
  ].forEach((args) => {
    const [num, expected] = args;
    test(generateTestName(findComplement, ...args), () => {
      const result = findComplement(num);
      expect(result).toBe(expected);
    });
  });
});
