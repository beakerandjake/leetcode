import { createBinaryTree } from '../src/2196.js';
import { bstToArr, generateTestName } from './util.js';

describe('2196. Create Binary Tree From Descriptions', () => {
  [
    [
      [
        [20, 15, 1],
        [20, 17, 0],
        [50, 20, 1],
        [50, 80, 0],
        [80, 19, 1],
      ],
      [50, 20, 80, 15, 17, 19],
    ],
    [
      [
        [1, 2, 1],
        [2, 3, 0],
        [3, 4, 1],
      ],
      [1, 2, null, null, 3, 4],
    ],
  ].forEach((args) => {
    const [descriptions, expected] = args;
    test(generateTestName(createBinaryTree, ...args), () => {
      const result = createBinaryTree(descriptions);
      expect(bstToArr(result)).toEqual(expected);
    });
  });
});
