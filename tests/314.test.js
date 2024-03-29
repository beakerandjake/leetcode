import { verticalOrder } from '../src/314.js';
import { arrToBst, generateTestName } from './util.js';

describe('314. Binary Tree Vertical Order Traversal', () => {
  [
    [
      [3, 9, 20, null, null, 15, 7],
      [[9], [3, 15], [20], [7]],
    ],
    [
      [3, 9, 8, 4, 0, 1, 7],
      [[4], [9], [3, 0, 1], [8], [7]],
    ],
    [
      [3, 9, 8, 4, 0, 1, 7, null, null, null, 2, 5],
      [[4], [9, 5], [3, 0, 1], [8, 2], [7]],
    ],
  ].forEach((args) => {
    const [root, expected] = args;
    test(generateTestName(verticalOrder, ...args), () => {
      const result = verticalOrder(arrToBst(root));
      expect(result).toEqual(expected);
    });
  });
});
