import { closestValue } from '../src/270.js';
import { arrToBst, generateTestName } from './util.js';

describe('270. Closest Binary Search Tree Value', () => {
  [
    [[4, 2, 5, 1, 3], 3.714286, 4],
    [[1], 4.428571, 1],
    [[1, null, 2], 3.428571, 2],
    [[4, 2, 5, 1, 3], 3.5, 3],
  ].forEach((args) => {
    const [root, target, expected] = args;
    test(generateTestName(closestValue, ...args), () => {
      const result = closestValue(arrToBst(root), target);
      expect(result).toBe(expected);
    });
  });
});
