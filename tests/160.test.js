import { getIntersectionNode } from '../src/160.js';
import { arrToStr } from './util.js';
import { arrayToLinkedList, linkedListToArray } from './util.js';

const tail = (head) => {
  let current = head;
  while (current.next) {
    current = current.next;
  }
  return current;
};

const intersect = (a, b, suffix) => {
  const aList = arrayToLinkedList(a);
  const bList = arrayToLinkedList(b);
  const sList = arrayToLinkedList(suffix);
  tail(aList).next = sList;
  tail(bList).next = sList;
  return [aList, bList, sList];
};

describe('160. Intersection of Two Linked Lists', () => {
  [[[4, 1], [5, 6, 1], [8, 4, 5], 8]].forEach(([a, b, suffix, intersectVal]) => {
    test(`${arrToStr(a)},${arrToStr(b)},${arrToStr(suffix)} -> ${intersectVal}`, () => {
      const [aList, bList, expected] = intersect(a, b, suffix);
      const result = getIntersectionNode(aList, bList);
      expect(expected.val).toBe(intersectVal);
      expect(result).toBe(expected);
    });
  });
});
