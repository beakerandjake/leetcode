import { countPairs } from '../src/1530.js';
import { arrToBst, generateTestName } from './util.js';

describe('1530. Number of Good Leaf Nodes Pairs', () => {
  [
    [[1, 2, 3, null, 4], 3, 1],
    [[1, 2, 3, 4, 5, 6, 7], 3, 2],
    [[7, 1, 4, 6, null, 5, 3, null, null, null, null, null, 2], 3, 1],
    [[1, 1, 1], 2, 1],
  ].forEach((args) => {
    const [root, distance, expected] = args;
    test(generateTestName(countPairs, ...args), () => {
      const result = countPairs(arrToBst(root), distance);
      expect(result).toBe(expected);
    });
  });
});
