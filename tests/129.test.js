import { sumNumbers } from '../src/129.js';
import { arrToBst, generateTestName } from './util.js';

describe('129. Sum Root to Leaf Numbers', () => {
  [
    [[1, 2, 3], 25],
    [[4, 9, 0, 5, 1], 1026],
  ].forEach((args) => {
    const [root, expected] = args;
    test(generateTestName(sumNumbers, ...args), () => {
      const result = sumNumbers(arrToBst(root));
      expect(result).toBe(expected);
    });
  });
});
