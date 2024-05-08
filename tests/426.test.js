import { treeToDoublyList } from '../src/426.js';
import { generateTestName } from './util.js';

describe('426. Convert Binary Search Tree to Sorted Doubly Linked List', () => {
  [
    [
      [2, 1, 3],
      [1, 2, 3],
    ],
  ].forEach((args) => {
    const [root, expected] = args;
    test(generateTestName(treeToDoublyList, ...args), () => {
      const result = treeToDoublyList(root);
      expect(result).toEqual(expected);
    });
  });
});
