import { treeToDoublyList } from '../src/426.js';
import { arrToBst, generateTestName } from './util.js';

const resultToArr = (result) => {
  if (!result) {
    return [];
  }
  const arr = [result.val];
  let current = result.right;
  while (current !== result) {
    arr.push(current.val);
    current = current.right;
  }
  return arr;
};

describe('426. Convert Binary Search Tree to Sorted Doubly Linked List', () => {
  [
    [
      [4, 2, 5, 1, 3],
      [1, 2, 3, 4, 5],
    ],
    [
      [2, 1, 3],
      [1, 2, 3],
    ],
  ].forEach((args) => {
    const [root, expected] = args;
    test(generateTestName(treeToDoublyList, ...args), () => {
      const result = treeToDoublyList(arrToBst(root));
      expect(resultToArr(result)).toEqual(expected);
    });
  });
});
