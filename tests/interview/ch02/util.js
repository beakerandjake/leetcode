import { LinkedList, Node } from '../../../src/interview/ch02/linkedList.js';

export const toNodes = (arr) => {
  const nodes = arr.map((x) => new Node(x));
  for (let index = 0; index < nodes.length - 1; index++) {
    nodes[index].next = nodes[index + 1];
  }
  return nodes;
};

export const toList = (nodes) => new LinkedList(nodes[0]);

export const str = (arr) => `[${arr.join(',')}]`;

export const expectListEqual = (a, b) => {
  const getNodes = (list) => {
    const toReturn = [];
    let current = list.head;
    while (current) {
      toReturn.push(current);
      current = current.next;
    }
    return toReturn;
  };

  expect(a.count).toBe(b.count);
  expect(a.head).toEqual(b.head);
  expect(a.tail).toEqual(b.tail);
  expect(getNodes(a)).toEqual(getNodes(b));
};
