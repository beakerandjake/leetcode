import { balanceBST } from '../src/1382.js';
import { generateTestName } from './util.js';

describe('1382. Balance a Binary Search Tree', () => {
  [
    [
      [1, null, 2, null, 3, null, 4, null, null],
      [2, 1, 3, null, null, null, 4],
    ],
    [
      [2, 1, 3],
      [2, 1, 3],
    ],
  ].forEach((args) => {
    const [root, expected] = args;
    test(generateTestName(balanceBST, ...args), () => {
      const result = balanceBST(root);
      expect(result).toEqual(expected);
    });
  });
});
