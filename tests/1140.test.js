import { stoneGameII } from '../src/1140.js';
import { generateTestName } from './util.js';

describe('1140. Stone Game II', () => {
  [
    [[2, 7, 9, 4, 4], 10],
    [[1, 2, 3, 4, 5, 100], 104],
  ].forEach((args) => {
    const [piles, expected] = args;
    test(generateTestName(stoneGameII, ...args), () => {
      const result = stoneGameII(piles);
      expect(result).toBe(expected);
    });
  });
});
