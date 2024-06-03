import { specialArray } from '../src/1608.js';
import { generateTestName } from './util.js';

describe('1608. Special Array With X Elements Greater Than or Equal X', () => {
  [
    [[3, 5], 2],
    [[0, 0], -1],
    [[0, 4, 3, 0, 4], 3],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(specialArray, ...args), () => {
      const result = specialArray(nums);
      expect(result).toBe(expected);
    });
  });
});
