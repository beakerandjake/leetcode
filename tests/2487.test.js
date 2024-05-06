import { removeNodes } from '../src/2487.js';
import { arrToList, generateTestName, listToArr } from './util.js';

describe('2487. Remove Nodes From Linked List', () => {
  [
    [
      [5, 2, 13, 3, 8],
      [13, 8],
    ],
    [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ],
  ].forEach((args) => {
    const [head, expected] = args;
    test(generateTestName(removeNodes, ...args), () => {
      const result = removeNodes(arrToList(head));
      expect(listToArr(result)).toEqual(expected);
    });
  });
});
