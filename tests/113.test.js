import { pathSum } from '../src/113.js';
import { arrToBst, generateTestName } from './util.js';

describe('113. Path Sum II', () => {
  [
    [
      [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
      22,
      [
        [5, 4, 11, 2],
        [5, 8, 4, 5],
      ],
    ],
    [[1, 2, 3], 5, []],
    [[1, 2], 0, []],
  ].forEach((args) => {
    const [root, targetSum, expected] = args;
    test(generateTestName(pathSum, ...args), () => {
      const result = pathSum(arrToBst(root), targetSum);
      expect(result).toEqual(expected);
    });
  });
});
