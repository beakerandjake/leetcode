import { trap } from '../src/42.js';
import { generateTestName } from './util.js';

describe('42. Trapping Rain Water', () => {
  [
    [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
    [[4, 2, 0, 3, 2, 5], 9],
  ].forEach((args) => {
    const [height, expected] = args;
    test(generateTestName(trap, ...args), () => {
      const result = trap(height);
      expect(result).toBe(expected);
    });
  });
});
