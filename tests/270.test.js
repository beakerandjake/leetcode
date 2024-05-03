import { closestValue } from '../src/270.js';
import { generateTestName } from './util.js';

describe('270. Closest Binary Search Tree Value', () => {
  [
    [[4, 2, 5, 1, 3], 3.714286, 4],
    [[1], 4.428571, 1],
  ].forEach((args) => {
    const [root, target, expected] = args;
    test(generateTestName(closestValue, ...args), () => {
      const result = closestValue(root, target);
      expect(result).toBe(expected);
    });
  });
});
