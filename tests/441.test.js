import { arrangeCoins } from '../src/441.js';
import { generateTestName } from './util.js';

describe('441. Arranging Coins', () => {
  [
    [5, 2],
    [8, 3],
  ].forEach((args) => {
    const [n, expected] = args;
    test(generateTestName(arrangeCoins, ...args), () => {
      const result = arrangeCoins(n);
      expect(result).toBe(expected);
    });
  });
});
