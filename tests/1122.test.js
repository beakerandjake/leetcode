import { relativeSortArray } from '../src/1122.js';
import { generateTestName } from './util.js';

describe('1122. Relative Sort Array', () => {
  [
    [
      [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
      [2, 1, 4, 3, 9, 6],
      [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19],
    ],
    [
      [28, 6, 22, 8, 44, 17],
      [22, 28, 8, 6],
      [22, 28, 8, 6, 17, 44],
    ],
    [
      [28,6,22,8,44,17],
      [22,28,8,6],
      [22,28,8,6,17,44]
    ]
  ].forEach((args) => {
    const [arr1, arr2, expected] = args;
    test(generateTestName(relativeSortArray, ...args), () => {
      const result = relativeSortArray(arr1, arr2);
      expect(result).toEqual(expected);
    });
  });
});
