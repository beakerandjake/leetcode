import { evaluateTree } from '../src/2331.js';
import { arrToBst, generateTestName } from './util.js';

describe('2331. Evaluate Boolean Binary Tree', () => {
  [
    [[2, 1, 3, null, null, 0, 1], true],
    [[0], false],
  ].forEach((args) => {
    const [root, expected] = args;
    test(generateTestName(evaluateTree, ...args), () => {
      const result = evaluateTree(arrToBst(root));
      expect(result).toBe(expected);
    });
  });
});
