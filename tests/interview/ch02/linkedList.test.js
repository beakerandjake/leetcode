import { LinkedList, Node } from '../../../src/interview/ch02/removeDups.js';

const toNodes = (arr) => {
  const nodes = arr.map((x) => new Node(x));
  for (let index = 0; index < nodes.length - 1; index++) {
    nodes[index].next = nodes[index + 1];
  }
  return nodes;
};

const toList = (nodes) => new LinkedList(nodes[0]);

const toString = (nodes) => `[${nodes.map(({ value }) => value).join(',')}]`;

describe('head', () => {
  [[], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]].forEach(
    (input) => {
      const nodes = toNodes(input);
      const expected = nodes[0];
      const list = toList(nodes);
      test(`list: ${toString(nodes)}, head: ${expected?.value}`, () => {
        const result = list.head;
        expect(result).toBe(expected);
      });
    }
  );
});

describe('tail', () => {
  [[], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]].forEach(
    (input) => {
      const nodes = toNodes(input);
      const expected = nodes[nodes.length - 1];
      const list = toList(nodes);
      test(`list: ${toString(nodes)}, tail: ${expected?.value}`, () => {
        const result = list.tail;
        expect(result).toBe(expected);
      });
    }
  );
});

describe('count', () => {
  [[], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]].forEach(
    (input) => {
      const nodes = toNodes(input);
      const expected = nodes.length;
      const list = toList(nodes);
      test(`list: ${toString(nodes)}, count: ${expected}`, () => {
        const result = list.count;
        expect(result).toBe(expected);
      });
    }
  );
});
