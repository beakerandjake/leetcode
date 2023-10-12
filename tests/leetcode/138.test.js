import { copyRandomList } from '../../src/leetcode/138.js';
import { arrToStr } from '../util.js';
/* eslint-disable no-param-reassign */

const arrToList = (arr) => {
  const nodes = arr.map(([val, randomIndex]) => ({
    val,
    next: null,
    random: randomIndex,
  }));

  nodes.forEach((node, i) => {
    node.next = nodes[i + 1] || null;
    node.random = nodes[node.random];
  });

  return nodes[0];
};

const listToArr = (head) => {
  const nodes = [];
  let current = head;
  while (current) {
    nodes.push(current);
    current = current.next;
  }
  return nodes.map((node) => [node.val, node.random ? nodes.indexOf(node.random) : null]);
};

describe('138. Copy List with Random Pointer', () => {
  [
    [
      [
        [7, null],
        [13, 0],
        [11, 4],
        [10, 2],
        [1, 0],
      ],
      [
        [7, null],
        [13, 0],
        [11, 4],
        [10, 2],
        [1, 0],
      ],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = copyRandomList(arrToList(input));
      expect(listToArr(result)).toEqual(expected);
    });
  });
});
