import { lemonadeChange } from '../src/860.js';
import { generateTestName } from './util.js';

describe('860. Lemonade Change', () => {
  [
    [[5, 5, 5, 10, 20], true],
    [[5, 5, 10, 10, 20], false],
  ].forEach((args) => {
    const [bills, expected] = args;
    test(generateTestName(lemonadeChange, ...args), () => {
      const result = lemonadeChange(bills);
      expect(result).toBe(expected);
    });
  });
});
