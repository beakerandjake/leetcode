import { smallestFromLeaf } from '../src/988.js';
import { generateTestName } from './util.js';

describe('988. Smallest String Starting From Leaf', () => {
  [
    [[0, 1, 2, 3, 4, 3, 4], 'dba'],
    [[25, 1, 3, 1, 3, 0, 2], 'adz'],
    [[2, 2, 1, null, 1, 0, null, 0], 'abc'],
  ].forEach((args) => {
    const [root, expected] = args;
    test(generateTestName(smallestFromLeaf, ...args), () => {
      const result = smallestFromLeaf(root);
      expect(result).toBe(expected);
    });
  });
});
