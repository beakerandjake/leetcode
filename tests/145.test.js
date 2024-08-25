import { postorderTraversal } from '../src/145.js';
import { generateTestName } from './util.js';

describe('145. Binary Tree Postorder Traversal', () => {
  [
    [
      [1, null, 2, 3],
      [3, 2, 1],
    ],
    [[], []],
    [[1], [1]],
  ].forEach((args) => {
    const [root, expected] = args;
    test(generateTestName(postorderTraversal, ...args), () => {
      const result = postorderTraversal(root);
      expect(result).toEqual(expected);
    });
  });
});
