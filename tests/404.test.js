import { sumOfLeftLeaves } from '../src/404.js';
import { generateTestName } from './util.js';

describe('404. Sum of Left Leaves', () => {
  [
    [[3, 9, 20, null, null, 15, 7], 24],
    [[1], 0],
  ].forEach((args) => {
    const [root, expected] = args;
    test(generateTestName(sumOfLeftLeaves, ...args), () => {
      const result = sumOfLeftLeaves(root);
      expect(result).toBe(expected);
    });
  });
});
