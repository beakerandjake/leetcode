import { reverseKGroup } from '../src/25.js';
import { generateTestName } from './util.js';

describe('25. Reverse Nodes in k-Group', () => {
  [
    [[1, 2, 3, 4, 5], 2, [2, 1, 4, 3, 5]],
    [[1, 2, 3, 4, 5], 3, [3, 2, 1, 4, 5]],
  ].forEach((args) => {
    const [head, k, expected] = args;
    test(generateTestName(reverseKGroup, ...args), () => {
      const result = reverseKGroup(head, k);
      expect(result).toEqual(expected);
    });
  });
});
