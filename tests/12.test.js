import { intToRoman } from '../src/12.js';
import { generateTestName } from './util.js';

describe('12. Integer to Roman', () => {
  [
    [3, 'III'],
    [9, 'IX'],
    [58, 'LVIII'],
    [1994, 'MCMXCIV'],
  ].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(intToRoman, ...args), () => {
      const result = intToRoman(input);
      expect(result).toBe(expected);
    });
  });
});
