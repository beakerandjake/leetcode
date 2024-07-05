import { mergeNodes } from '../src/2181.js';
import { arrToList, generateTestName, listToArr } from './util.js';

describe('2181. Merge Nodes in Between Zeros', () => {
  [
    [
      [0, 3, 1, 0, 4, 5, 2, 0],
      [4, 11],
    ],
    [
      [0, 1, 0, 3, 0, 2, 2, 0],
      [1, 3, 4],
    ],
  ].forEach((args) => {
    const [head, expected] = args;
    test(generateTestName(mergeNodes, ...args), () => {
      const result = mergeNodes(arrToList(head));
      expect(listToArr(result)).toEqual(expected);
    });
  });
});
