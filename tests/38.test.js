import { countAndSay } from '../src/38.js';
import { generateTestName } from './util.js';

describe('38. Count and Say', () => {
  [
    [4, '1211'],
    [1, '1'],
  ].forEach((args) => {
    const [n, expected] = args;
    test(generateTestName(countAndSay, ...args), () => {
      const result = countAndSay(n);
      expect(result).toBe(expected);
    });
  });
});
