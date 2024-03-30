import { addStrings } from '../src/415.js';
import { generateTestName } from './util.js';

describe('415. Add Strings', () => {
  [
    ['11', '123', '134'],
    ['456', '77', '533'],
    ['0', '0', '0'],
    ['99', '1', '100'],
  ].forEach((args) => {
    const [num1, num2, expected] = args;
    test(generateTestName(addStrings, ...args), () => {
      const result = addStrings(num1, num2);
      expect(result).toBe(expected);
    });
  });
});
