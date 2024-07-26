import { sortJumbled } from '../src/2191.js';
import { generateTestName } from './util.js';

describe('2191. Sort the Jumbled Numbers', () => {
  [
    [
      [8, 9, 4, 0, 2, 1, 3, 5, 7, 6],
      [991, 338, 38],
      [338, 38, 991],
    ],
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [789, 456, 123],
      [123, 456, 789],
    ],
  ].forEach((args) => {
    const [mapping, nums, expected] = args;
    test(generateTestName(sortJumbled, ...args), () => {
      const result = sortJumbled(mapping, nums);
      expect(result).toEqual(expected);
    });
  });
});
