import { doubleIt } from '../src/2816.js';
import { generateTestName } from './util.js';

describe('2816. Double a Number Represented as a Linked List', () => {
  [
    [
      [1, 8, 9],
      [3, 7, 8],
    ],
    [
      [9, 9, 9],
      [1, 9, 9, 8],
    ],
  ].forEach((args) => {
    const [head, expected] = args;
    test(generateTestName(doubleIt, ...args), () => {
      const result = doubleIt(head);
      expect(result).toEqual(expected);
    });
  });
});
