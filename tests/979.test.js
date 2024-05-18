import { distributeCoins } from '../src/979.js';
import { generateTestName } from './util.js';

describe('979. Distribute Coins in Binary Tree', () => {
  [
    [[3, 0, 0], 2],
    [[0, 3, 0], 3],
  ].forEach((args) => {
    const [root, expected] = args;
    test(generateTestName(distributeCoins, ...args), () => {
      const result = distributeCoins(root);
      expect(result).toBe(expected);
    });
  });
});
