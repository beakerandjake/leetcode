import { isNStraightHand } from '../src/846.js';
import { generateTestName } from './util.js';

describe('846. Hand of Straights', () => {
  [
    [[1, 2, 3, 6, 2, 3, 4, 7, 8], 3, true],
    [[1, 2, 3, 4, 5], 4, false],
  ].forEach((args) => {
    const [hand, groupSize, expected] = args;
    test(generateTestName(isNStraightHand, ...args), () => {
      const result = isNStraightHand(hand, groupSize);
      expect(result).toBe(expected);
    });
  });
});
