import { deleteNode } from '../src/237.js';
import { arrToStr, listToArr, arrToList } from './util.js';

const findNode = (head, val) => {
  if (!head) {
    return null;
  }
  if (head.val === val) {
    return head;
  }
  return findNode(head.next, val);
};

describe('237. Delete Node in a Linked List', () => {
  [
    [[4, 5, 1, 9], 5, [4, 1, 9]],
    [[4, 5, 1, 9], 1, [4, 5, 9]],
  ].forEach(([input, node, expected]) => {
    test(`${arrToStr(input)},${node} -> ${arrToStr(expected)}`, () => {
      const list = arrToList(input);
      deleteNode(findNode(list, node));
      expect(listToArr(list)).toEqual(expected);
    });
  });
});
