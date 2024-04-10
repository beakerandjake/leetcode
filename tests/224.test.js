import { calculate } from '../src/224.js';
import { generateTestName } from './util.js';

describe('224. Basic Calculator', () => {
  [
    ['1 + 1', 2],
    [' 2-1 + 2 ', 3],
    ['(1+(4+5+2)-3)+(6+8)', 23],
    ['22345+0', 22345],
    ['-1234 + 10', -1224],
    ['(-1234 + 10) - 10', -1234],
    ['(7-8+9)', 8],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(calculate, ...args), () => {
      const result = calculate(s);
      expect(result).toBe(expected);
    });
  });
});
