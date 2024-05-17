import { removeLeafNodes } from '../src/1325.js';
import { arrToBst, bstToArr, generateTestName } from './util.js';

describe('1325. Delete Leaves With a Given Value', () => {
  [
    [[1, 2, 3, 2, null, 2, 4], 2, [1, null, 3, null, 4]],
    [[1, 3, 3, 3, 2], 3, [1, 3, null, null, 2]],
    [[1, 2, null, 2, null, 2], 2, [1]],
  ].forEach((args) => {
    const [root, target, expected] = args;
    test(generateTestName(removeLeafNodes, ...args), () => {
      const result = removeLeafNodes(arrToBst(root), target);
      expect(bstToArr(result)).toEqual(expected);
    });
  });
});
