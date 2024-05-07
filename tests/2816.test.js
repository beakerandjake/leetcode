import { doubleIt } from '../src/2816.js';
import { arrToList, generateTestName, listToArr } from './util.js';

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
      const result = doubleIt(arrToList(head));
      expect(listToArr(result)).toEqual(expected);
    });
  });
});
