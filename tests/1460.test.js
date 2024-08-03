import { canBeEqual } from '../src/1460.js';
import { generateTestName } from './util.js';

describe('1460. Make Two Arrays Equal by Reversing Subarrays', () => {
  [
    [[1, 2, 3, 4], [2, 4, 1, 3], true],
    [[7], [7], true],
    [[3, 7, 9], [3, 7, 11], false],
  ].forEach((args) => {
    const [target, arr, expected] = args;
    test(generateTestName(canBeEqual, ...args), () => {
      const result = canBeEqual(target, arr);
      expect(result).toBe(expected);
    });
  });
});
