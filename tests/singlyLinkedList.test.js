import {
  Node,
  SinglyLinkedList,
  find,
  insertAfter,
  insertBefore,
  remove,
  insertStart,
  insertEnd,
} from '../src/singlyLinkedList.js';

const createLinkedList = (keys) => {
  const head = new Node(keys[0]);
  const list = new SinglyLinkedList(head);
  const nodes = [head];
  let previousNode = head;
  for (let index = 1; index < keys.length; index++) {
    const current = new Node(keys[index]);
    nodes.push(current);
    previousNode.next = current;
    previousNode = current;
  }
  return { list, nodes };
};

describe('find()', () => {
  test('returns node if list contains key', () => {
    const { list, nodes } = createLinkedList([
      'A',
      'B',
      'C',
      'D',
      'Q',
      'Z',
      'P',
      'N',
      'F',
    ]);
    const expected = nodes[6]; // P
    const result = find(list, expected.key);
    expect(result).toEqual(expected);
  });

  test('returns null if list does not contain key', () => {
    const { list, nodes } = createLinkedList([
      'A',
      'B',
      'C',
      'D',
      'Q',
      'Z',
      'P',
      'N',
      'F',
    ]);
    const result = find(list, 'J');
    expect(result).toBe(null);
  });
});

describe('insertAfter()', () => {
  test('inserts node in the middle of list', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    // Insert B after Q.
    insertAfter(list, nodes[1], new Node('B'));
    expect(list).toStrictEqual(createLinkedList(['A', 'Q', 'B', 'Z', 'C']).list);
  });

  test('inserts node after tail', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    // Insert B after C.
    insertAfter(list, nodes[3], new Node('B'));
    expect(list).toStrictEqual(createLinkedList(['A', 'Q', 'Z', 'C', 'B']).list);
  });
});

describe('insertBefore()', () => {
  test('inserts node in the middle of list', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    // Insert B before Z.
    insertBefore(list, nodes[2], new Node('B'));
    expect(list).toStrictEqual(createLinkedList(['A', 'Q', 'B', 'Z', 'C']).list);
  });

  test('inserts node before head', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    // Insert B before A.
    insertBefore(list, nodes[0], new Node('B'));
    expect(list).toStrictEqual(createLinkedList(['B', 'A', 'Q', 'Z', 'C']).list);
  });
});

describe('insertStart()', () => {
  test('inserts on empty list', () => {
    const list = new SinglyLinkedList();
    const node = new Node('Q');
    insertStart(list, node);
    expect(list).toStrictEqual(createLinkedList(['Q']).list);
    expect(list.head).toStrictEqual(node);
  });

  test('inserts head on non empty list', () => {
    const { list } = createLinkedList(['A', 'Q', 'Z', 'C']);
    const node = new Node('L');
    insertStart(list, node);
    expect(list).toStrictEqual(createLinkedList(['L', 'A', 'Q', 'Z', 'C']).list);
    expect(list.head).toStrictEqual(node);
  });
});

describe('insertEnd()', () => {
  test('inserts on empty list', () => {
    const list = new SinglyLinkedList();
    const node = new Node('Q');
    insertEnd(list, node);
    expect(list).toStrictEqual(createLinkedList(['Q']).list);
    expect(list.head).toStrictEqual(node);
  });

  test('inserts tail on non empty list', () => {
    const { list } = createLinkedList(['A', 'Q', 'Z', 'C']);
    insertEnd(list, new Node('L'));
    expect(list).toStrictEqual(createLinkedList(['A', 'Q', 'Z', 'C', 'L']).list);
  });
});

describe('remove()', () => {
  test('removes node if node is head', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    remove(list, nodes[0]);
    expect(list).toStrictEqual(createLinkedList(['Q', 'Z', 'C']).list);
  });

  test('removes node in the middle of list', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    // remove Z
    remove(list, nodes[2]);
    expect(list).toStrictEqual(createLinkedList(['A', 'Q', 'C']).list);
  });

  test('removes node if node is tail', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    remove(list, nodes[3]);
    expect(list).toStrictEqual(createLinkedList(['A', 'Q', 'Z']).list);
  });
});
