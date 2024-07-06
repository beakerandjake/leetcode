import { passThePillow } from '../src/2582.js';
import { generateTestName } from './util.js';

describe('2582. Pass the Pillow', () => {
  [
    [4, 5, 2],
    [3, 2, 3],
  ].forEach((args) => {
    const [n, time, expected] = args;
    test(generateTestName(passThePillow, ...args), () => {
      const result = passThePillow(n, time);
      expect(result).toBe(expected);
    });
  });
});
