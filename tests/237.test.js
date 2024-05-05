import { deleteNode } from '../src/237.js';
import { arrToList, generateTestName, listToArr } from './util.js';

const find = (head, value) => {
  if (!head) {
    return null;
  }
  if (head.val === value) {
    return head;
  }
  return find(head.next, value);
};

describe('237. Delete Node in a Linked List', () => {
  [
    [[4, 5, 1, 9], 5, [4, 1, 9]],
    [[4, 5, 1, 9], 1, [4, 5, 9]],
  ].forEach((args) => {
    const [head, node, expected] = args;
    test(generateTestName(deleteNode, ...args), () => {
      const list = arrToList(head);
      deleteNode(find(list, node));
      expect(listToArr(list)).toEqual(expected);
    });
  });
});
