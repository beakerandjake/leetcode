import { tree2str } from '../src/606.js';
import { generateTestName } from './util.js';

describe('606. Construct String from Binary Tree', () => {
  [
    [[1, 2, 3, 4], '1(2(4))(3)'],
    [[1, 2, 3, null, 4], '1(2()(4))(3)'],
  ].forEach((args) => {
    const [root, expected] = args;
    test(generateTestName(tree2str, ...args), () => {
      const result = tree2str(root);
      expect(result).toBe(expected);
    });
  });
});
