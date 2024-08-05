import { levelOrderBottom } from '../src/107.js';
import { generateTestName } from './util.js';

describe('107. Binary Tree Level Order Traversal II', () => {
  [
    [
      [3, 9, 20, null, null, 15, 7],
      [[15, 7], [9, 20], [3]],
    ],
    [[1], [[1]]],
    [[], []],
  ].forEach((args) => {
    const [root, expected] = args;
    test(generateTestName(levelOrderBottom, ...args), () => {
      const result = levelOrderBottom(root);
      expect(result).toEqual(expected);
    });
  });
});
