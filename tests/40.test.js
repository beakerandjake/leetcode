import { combinationSum2 } from '../src/40.js';
import { generateTestName } from './util.js';

describe('40. Combination Sum II', () => {
  [
    [
      [10, 1, 2, 7, 6, 1, 5],
      8,
      [
        [1, 1, 6],
        [1, 2, 5],
        [1, 7],
        [2, 6],
      ],
    ],
    [[2, 5, 2, 1, 2], 5, [[1, 2, 2], [5]]],
    [
      [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
      30,
      [
        [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1,
        ],
      ],
    ],
  ].forEach((args) => {
    const [candidates, target, expected] = args;
    test(generateTestName(combinationSum2, ...args), () => {
      const result = combinationSum2(candidates, target);
      expect(result).toIncludeSameMembers(expected);
    });
  });
});
