import { thirdMax } from '../src/414.js';
import { generateTestName } from './util.js';

describe('414. Third Maximum Number', () => {
  [
    [[3, 2, 1], 1],
    [[1, 2], 2],
    [[2, 2, 3, 1], 1],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(thirdMax, ...args), () => {
      const result = thirdMax(nums);
      expect(result).toBe(expected);
    });
  });
});
