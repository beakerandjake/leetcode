import { convert } from '../src/6.js';
import { generateTestName } from './util.js';

describe('6. Zigzag Conversion', () => {
  [
    ['PAYPALISHIRING', 3, 'PAHNAPLSIIGYIR'],
    ['PAYPALISHIRING', 4, 'PINALSIGYAHRPI'],
    ['A', 1, 'A'],
  ].forEach((args) => {
    const [s, numRows, expected] = args;
    test(generateTestName(convert, ...args), () => {
      const result = convert(s, numRows);
      expect(result).toBe(expected);
    });
  });
});
