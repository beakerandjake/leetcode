import { singleNumber } from '../src/260.js';
import { generateTestName } from './util.js';

describe('260. Single Number III', () => {
  [
    [
      [1, 2, 1, 3, 2, 5],
      [3, 5],
    ],
    [
      [-1, 0],
      [-1, 0],
    ],
    [
      [0, 1],
      [1, 0],
    ],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(singleNumber, ...args), () => {
      const result = singleNumber(nums);
      expect(result).toIncludeSameMembers(expected);
    });
  });
});
