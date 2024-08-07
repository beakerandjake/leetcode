import { numberToWords } from '../src/273.js';
import { generateTestName } from './util.js';

describe('273. Integer to English Words', () => {
  [
    [123, 'One Hundred Twenty Three'],
    [12345, 'Twelve Thousand Three Hundred Forty Five'],
    [1234567, 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven'],
  ].forEach((args) => {
    const [num, expected] = args;
    test(generateTestName(numberToWords, ...args), () => {
      const result = numberToWords(num);
      expect(result).toBe(expected);
    });
  });
});
