import { transpose } from '../src/867.js';
import { generateTestName } from './util.js';

describe('867. Transpose Matrix', () => {
  [
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
      ],
    ],
    [
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      [
        [1, 4],
        [2, 5],
        [3, 6],
      ],
    ],
  ].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(transpose, ...args), () => {
      const result = transpose(input);
      expect(result).toEqual(expected);
    });
  });
});
