import { bstToGst } from '../src/1038.js';
import { arrToBst, bstToArr, generateTestName } from './util.js';

describe('1038. Binary Search Tree to Greater Sum Tree', () => {
  [
    [
      [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8],
      [30, 36, 21, 36, 35, 26, 15, null, null, null, 33, null, null, null, 8],
    ],
    [
      [0, null, 1],
      [1, null, 1],
    ],
  ].forEach((args) => {
    const [root, expected] = args;
    test(generateTestName(bstToGst, ...args), () => {
      const result = bstToGst(arrToBst(root));
      expect(bstToArr(result)).toEqual(expected);
    });
  });
});
