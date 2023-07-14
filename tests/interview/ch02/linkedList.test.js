import { LinkedList, Node } from '../../../src/interview/ch02/removeDups.js';

const toNodes = (arr) => {
  const nodes = arr.map((x) => new Node(x));
  for (let index = 0; index < nodes.length - 1; index++) {
    nodes[index].next = nodes[index + 1];
  }
  return nodes;
};

const toList = (nodes) => new LinkedList(nodes[0]);

const str = (nodes) => `[${nodes.map(({ value }) => value).join(',')}]`;

const getNodes = (list) => {
  const toReturn = [];
  let current = list.head;
  while (current) {
    toReturn.push(current);
    current = current.next;
  }
  return toReturn;
};

const expectListEqual = (a, b) => {
  expect(a.count).toBe(b.count);
  expect(a.head).toEqual(b.head);
  expect(a.tail).toEqual(b.tail);
  expect(getNodes(a)).toEqual(getNodes(b));
};

describe('head()', () => {
  [[], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]].forEach(
    (input) => {
      const nodes = toNodes(input);
      const expected = nodes[0];
      const list = toList(nodes);
      test(`${str(nodes)}.head = ${expected?.value}`, () => {
        const result = list.head;
        expect(result).toBe(expected);
      });
    }
  );
});

describe('tail()', () => {
  [[], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]].forEach(
    (input) => {
      const nodes = toNodes(input);
      const expected = nodes[nodes.length - 1];
      const list = toList(nodes);
      test(`${str(nodes)}.tail = ${expected?.value}`, () => {
        const result = list.tail;
        expect(result).toBe(expected);
      });
    }
  );
});

describe('count()', () => {
  [[], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]].forEach(
    (input) => {
      const nodes = toNodes(input);
      const expected = nodes.length;
      const list = toList(nodes);
      test(`${str(nodes)}.count = ${expected}`, () => {
        const result = list.count;
        expect(result).toBe(expected);
      });
    }
  );
});

describe('contains()', () => {
  [
    [[], 1, false],
    [[1], 1, true],
    [[1], 2, false],
    [[1, 2], 1, true],
    [[1, 2], 2, true],
    [[1, 2], 3, false],
    [[1, 2, 3], 1, true],
    [[1, 2, 3], 2, true],
    [[1, 2, 3], 3, true],
    [[1, 2, 3], 4, false],
    [[1, 2, 3, 4], 1, true],
    [[1, 2, 3, 4], 2, true],
    [[1, 2, 3, 4], 3, true],
    [[1, 2, 3, 4], 4, true],
    [[1, 2, 3, 4], 5, false],
    [[1, 2, 3, 4, 5], 1, true],
    [[1, 2, 3, 4, 5], 2, true],
    [[1, 2, 3, 4, 5], 3, true],
    [[1, 2, 3, 4, 5], 4, true],
    [[1, 2, 3, 4, 5], 5, true],
    [[1, 2, 3, 4, 5], 6, false],
    [[1, 2, 3, 4, 5, 6], 1, true],
    [[1, 2, 3, 4, 5, 6], 2, true],
    [[1, 2, 3, 4, 5, 6], 3, true],
    [[1, 2, 3, 4, 5, 6], 4, true],
    [[1, 2, 3, 4, 5, 6], 5, true],
    [[1, 2, 3, 4, 5, 6], 6, true],
    [[1, 2, 3, 4, 5, 6], 7, false],
  ].forEach(([input, searchValue, expected]) => {
    const nodes = toNodes(input);
    const list = toList(nodes);
    test(`${str(nodes)}.contains(${searchValue}) = ${expected}`, () => {
      const result = list.contains(searchValue);
      expect(result).toBe(expected);
    });
  });
});

describe('find()', () => {
  [
    [[], 1, -1],
    [[1], 1, 0],
    [[1], 2, -1],
    [[1, 2], 1, 0],
    [[1, 2], 2, 1],
    [[1, 2], 3, -1],
    [[1, 2, 3], 1, 0],
    [[1, 2, 3], 2, 1],
    [[1, 2, 3], 3, 2],
    [[1, 2, 3], 4, -1],
    [[1, 2, 3, 4], 1, 0],
    [[1, 2, 3, 4], 2, 1],
    [[1, 2, 3, 4], 3, 2],
    [[1, 2, 3, 4], 4, 3],
    [[1, 2, 3, 4], 5, -1],
    [[1, 2, 3, 4, 5], 1, 0],
    [[1, 2, 3, 4, 5], 2, 1],
    [[1, 2, 3, 4, 5], 3, 2],
    [[1, 2, 3, 4, 5], 4, 3],
    [[1, 2, 3, 4, 5], 5, 4],
    [[1, 2, 3, 4, 5], 6, -1],
    [[1, 2, 3, 4, 5, 6], 1, 0],
    [[1, 2, 3, 4, 5, 6], 2, 1],
    [[1, 2, 3, 4, 5, 6], 3, 2],
    [[1, 2, 3, 4, 5, 6], 4, 3],
    [[1, 2, 3, 4, 5, 6], 5, 4],
    [[1, 2, 3, 4, 5, 6], 6, 5],
    [[1, 2, 3, 4, 5, 6], 7, -1],
  ].forEach(([input, search, index]) => {
    const nodes = toNodes(input);
    const expected = nodes[index];
    const list = toList(nodes);
    test(`${str(nodes)}.find(${search}) = ${expected ? 'node' : 'undefined'}`, () => {
      const result = list.find(search);
      expect(result).toBe(expected);
    });
  });
});

describe('addHead()', () => {
  [
    [[], 1],
    [[1], 2],
    [[2, 1], 3],
    [[3, 2, 1], 4],
    [[4, 3, 2, 1], 5],
    [[5, 4, 3, 2, 1], 6],
  ].forEach(([input, toAdd]) => {
    const nodes = toNodes(input);
    const list = toList(nodes);
    const expectedNodes = toNodes([toAdd, ...input]);
    const expectedList = toList(expectedNodes);
    test(`${str(nodes)}.addHead(${toAdd}) = ${str(expectedNodes)}`, () => {
      list.addHead(toAdd);
      expectListEqual(list, expectedList);
    });
  });
});

describe('addTail()', () => {
  [
    [[], 1],
    [[1], 2],
    [[2, 1], 3],
    [[3, 2, 1], 4],
    [[4, 3, 2, 1], 5],
    [[5, 4, 3, 2, 1], 6],
  ].forEach(([input, toAdd]) => {
    const nodes = toNodes(input);
    const list = toList(nodes);
    const expectedNodes = toNodes([...input, toAdd]);
    const expectedList = toList(expectedNodes);
    test(`${str(nodes)}.addTail(${toAdd}) = ${str(expectedNodes)}`, () => {
      list.addTail(toAdd);
      expectListEqual(list, expectedList);
    });
  });
});
