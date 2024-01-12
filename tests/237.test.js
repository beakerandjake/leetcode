import { deleteNode } from '../src/leetcode/237.js';
import { arrToStr } from './util.js';
import { linkedListToArray, arrayToLinkedList } from './leetcode/util.js';

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
    // replace with real test data
    [[4, 5, 1, 9], 5, [4, 1, 9]],
    [[4, 5, 1, 9], 1, [4, 5, 9]],
  ].forEach(([input, node, expected]) => {
    test(`${arrToStr(input)},${node} -> ${arrToStr(expected)}`, () => {
      const list = arrayToLinkedList(input);
      deleteNode(findNode(list, node));
      expect(linkedListToArray(list)).toEqual(expected);
    });
  });
});
