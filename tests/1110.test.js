import { delNodes } from '../src/1110.js';
import { generateTestName } from './util.js';

describe('1110. Delete Nodes And Return Forest', () => {
  [
    [
      [1, 2, 3, 4, 5, 6, 7],
      [3, 5],
      [[1, 2, null, 4], [6], [7]],
    ],
    [[1, 2, 4, null, 3], [3], [[1, 2, 4]]],
  ].forEach((args) => {
    const [root, to_delete, expected] = args;
    test(generateTestName(delNodes, ...args), () => {
      const result = delNodes(root, to_delete);
      expect(result).toEqual(expected);
    });
  });
});
