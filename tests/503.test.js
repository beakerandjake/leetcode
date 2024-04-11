import { nextGreaterElements } from '../src/503.js';
import { generateTestName } from './util.js';

describe('503. Next Greater Element II', () => {
  [
    [
      [1, 2, 1],
      [2, -1, 2],
    ],
    [
      [1, 2, 3, 4, 3],
      [2, 3, 4, -1, 4],
    ],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(nextGreaterElements, ...args), () => {
      const result = nextGreaterElements(nums);
      expect(result).toEqual(expected);
    });
  });
});
