import { addOneRow } from '../src/623.js';
import { generateTestName } from './util.js';

describe('623. Add One Row to Tree', () => {
  [
    [[4, 2, 6, 3, 1, 5], 1, 2, [4, 1, 1, 2, null, null, 6, 3, 1, 5]],
    [[4, 2, null, 3, 1], 1, 3, [4, 2, null, 1, 1, 3, null, null, 1]],
  ].forEach((args) => {
    const [root, val, depth, expected] = args;
    test(generateTestName(addOneRow, ...args), () => {
      const result = addOneRow(root, val, depth);
      expect(result).toEqual(expected);
    });
  });
});
