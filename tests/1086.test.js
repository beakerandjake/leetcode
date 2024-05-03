import { highFive } from '../src/1086.js';
import { generateTestName } from './util.js';

describe('1086. High Five', () => {
  [
    [
      [
        [1, 91],
        [1, 92],
        [2, 93],
        [2, 97],
        [1, 60],
        [2, 77],
        [1, 65],
        [1, 87],
        [1, 100],
        [2, 100],
        [2, 76],
      ],
      [
        [1, 87],
        [2, 88],
      ],
    ],
    [
      [
        [1, 100],
        [7, 100],
        [1, 100],
        [7, 100],
        [1, 100],
        [7, 100],
        [1, 100],
        [7, 100],
        [1, 100],
        [7, 100],
      ],
      [
        [1, 100],
        [7, 100],
      ],
    ],
  ].forEach((args) => {
    const [items, expected] = args;
    test(generateTestName(highFive, ...args), () => {
      const result = highFive(items);
      expect(result).toEqual(expected);
    });
  });
});
