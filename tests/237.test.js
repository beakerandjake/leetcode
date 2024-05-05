import { deleteNode } from '../src/237.js';
import { generateTestName } from './util.js';

describe('237. Delete Node in a Linked List', () => {
  [
    [[4, 5, 1, 9], 5, [4, 1, 9]],
    [[4, 5, 1, 9], 1, [4, 5, 9]],
  ].forEach((args) => {
    const [head, node, expected] = args;
    test(generateTestName(deleteNode, ...args), () => {
      const result = deleteNode(head, node);
      expect(result).toEqual(expected);
    });
  });
});
