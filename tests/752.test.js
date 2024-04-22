import { openLock } from '../src/752.js';
import { generateTestName } from './util.js';

describe('752. Open the Lock', () => {
  [
    [['0201', '0101', '0102', '1212', '2002'], '0202', 6],
    [['8888'], '0009', 1],
    [['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'], '8888', -1],
  ].forEach((args) => {
    const [deadends, target, expected] = args;
    test(generateTestName(openLock, ...args), () => {
      const result = openLock(deadends, target);
      expect(result).toBe(expected);
    });
  });
});
