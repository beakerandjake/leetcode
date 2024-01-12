import { inorderSuccessor } from '../src/285.js';
import { arrToStr, arrToBst } from './util.js';

describe('285. Inorder Successor in BST', () => {
  [
    [[2, 1, 3], 1, 2],
    [[2, 1], 1, 2],
    [[5, 3, 6, 2, 4, null, null, 1], 6, null],
    [[0], 0, null],
  ].forEach(([root, p, expected]) => {
    test(`${arrToStr(root)},${p} -> ${expected}`, () => {
      const result = inorderSuccessor(arrToBst(root), p);
      expect(result).toBe(expected);
    });
  });
});
