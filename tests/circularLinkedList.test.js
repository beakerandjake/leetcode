import {
  Node,
  CircularLinkedList,
  find,
  insertAfter,
  insertBefore,
  remove,
  insertStart,
  insertEnd,
} from '../src/circularLinkedList.js';

const createLinkedList = (keys = []) => {
  const nodes = keys.map((x) => new Node(x));
  const list = new CircularLinkedList(nodes[0]);
  for (let index = 0; index < nodes.length; index++) {
    nodes[index].next = index === nodes.length - 1 ? nodes[0] : nodes[index + 1];
  }
  return { list, nodes };
};

describe('find()', () => {
  test('empty list - returns null', () => {
    expect(true).toBe(false);
  });

  test('list with multiple nodes, key is in list - returns node with matching key', () => {
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
    const expected = nodes[nodes.length - 1]; // P
    const result = find(list, expected.key);
    expect(result).toEqual(expected);
  });

  test('list with multiple nodes, key is not in list - returns null', () => {
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
  test('list is empty - inserts correctly', () => {
    expect(false).toBe(true);
  });

  test('list is empty - sets head to node', () => {
    expect(false).toBe(true);
  });

  test('list is empty - sets head.next to node', () => {
    expect(false).toBe(true);
  });

  test('list with one node- inserts successfully', () => {
    expect(false).toBe(true);
  });

  test('list with one node - sets node.next to head', () => {
    expect(false).toBe(true);
  });

  test('list with multiple nodes, insert in middle - inserts successfully', () => {
    expect(false).toBe(true);
  });

  test('list with multiple nodes, insert after tail - inserts successfully', () => {
    expect(false).toBe(true);
  });

  test('list with multiple nodes, insert after tail - sets node.next to head', () => {
    expect(false).toBe(true);
  });

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
  test('list is empty - inserts correctly', () => {
    expect(false).toBe(true);
  });

  test('list is empty - sets head to node', () => {
    expect(false).toBe(true);
  });

  test('list is empty - sets head.next to node', () => {
    expect(false).toBe(true);
  });

  test('list with one node- inserts successfully', () => {
    expect(false).toBe(true);
  });

  test('list with one node - sets head to node', () => {
    expect(false).toBe(true);
  });

  test('list with one node - sets tail.next to node', () => {
    expect(false).toBe(true);
  });

  test('list with multiple nodes, insert in middle - inserts successfully', () => {
    expect(false).toBe(true);
  });

  test('list with multiple nodes, insert before tail - inserts successfully', () => {
    expect(false).toBe(true);
  });

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
  test('list is empty - inserts correctly', () => {
    const { list } = createLinkedList();
    insertStart(list, new Node('Q'));
    expect(list).toEqual(createLinkedList(['Q']).list);
  });

  test('list is empty - sets head to node', () => {
    const { list } = createLinkedList();
    const node = new Node('Q');
    insertStart(list, node);
    expect(list.head).toEqual(node);
  });

  test('list is empty - sets head.next to node', () => {
    const { list } = createLinkedList();
    const node = new Node('Q');
    insertStart(list, node);
    expect(list.head.next).toEqual(node);
  });

  test('list with one node - inserts successfully', () => {
    const { list } = createLinkedList(['Q']);
    insertStart(list, new Node('P'));
    expect(list).toStrictEqual(createLinkedList(['P', 'Q']).list);
  });

  test('list with one node - sets head to node', () => {
    const { list } = createLinkedList(['Q']);
    const node = new Node('P');
    insertStart(list, node);
    expect(list.head).toEqual(node);
  });

  test('list with one node - sets tail.next to node', () => {
    const { list, nodes } = createLinkedList(['Q']);
    const node = new Node('P');
    insertStart(list, node);
    expect(nodes[nodes.length - 1].next).toEqual(node);
  });

  test('list with multiple nodes - inserts correctly', () => {
    const { list } = createLinkedList(['A', 'Q', 'Z', 'C']);
    insertStart(list, new Node('L'));
    expect(list).toStrictEqual(createLinkedList(['L', 'A', 'Q', 'Z', 'C']).list);
  });

  test('list with multiple nodes - sets head to node', () => {
    const { list } = createLinkedList(['A', 'Q', 'Z', 'C']);
    const node = new Node('L');
    insertStart(list, node);
    expect(list.head).toStrictEqual(node);
  });

  test('list with multiple nodes - sets tail.next to node', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    const node = new Node('L');
    insertStart(list, node);
    expect(nodes[nodes.length - 1].next).toStrictEqual(node);
  });
});

describe('insertEnd()', () => {
  test('list is empty - inserts correctly', () => {
    const { list } = createLinkedList();
    const node = new Node('Q');
    insertEnd(list, node);
    expect(list).toEqual(createLinkedList(['Q']).list);
  });

  test('list is empty - sets head to new node', () => {
    const { list } = createLinkedList();
    const node = new Node('Q');
    insertEnd(list, node);
    expect(list.head).toEqual(node);
  });

  test('list is empty - sets head.next to head', () => {
    const { list } = createLinkedList();
    const node = new Node('Q');
    insertEnd(list, node);
    expect(list.head.next).toEqual(node);
  });

  test('list with one node - inserts correctly', () => {
    const { list } = createLinkedList(['Q']);
    insertEnd(list, new Node('P'));
    expect(list).toEqual(createLinkedList(['Q', 'P']).list);
  });

  test('list with one node - sets node.next to head', () => {
    const { list } = createLinkedList(['Q']);
    const node = new Node('P');
    insertEnd(list, node);
    expect(node.next).toEqual(list.head);
  });

  test('list with multiple nodes - inserts correctly', () => {
    const { list } = createLinkedList(['A', 'Q', 'Z', 'C']);
    insertEnd(list, new Node('L'));
    expect(list).toEqual(createLinkedList(['A', 'Q', 'Z', 'C', 'L']).list);
  });

  test('list with multiple nodes - sets tail.next to head', () => {
    const { list } = createLinkedList(['A', 'Q', 'Z', 'C']);
    const node = new Node('L');
    insertEnd(list, node);
    expect(node.next).toEqual(list.head);
  });
});

describe('remove()', () => {
  test('list with multiple nodes, remove head - sets list to expected', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    remove(list, nodes[0]);
    expect(list).toEqual(createLinkedList(['Q', 'Z', 'C']).list);
  });

  test('list with multiple nodes, remove head - sets head to head.next', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    remove(list, nodes[0]);
    expect(list.head).toEqual(nodes[1]);
  });

  test('list with multiple nodes, remove head - sets tail.next to head.next', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    remove(list, nodes[0]);
    expect(nodes[nodes.length - 1].next).toEqual(nodes[1]);
  });

  test('list with multiple nodes, remove tail - sets list to expected', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    // remove Z
    remove(list, nodes[nodes.length - 1]);
    expect(list).toEqual(createLinkedList(['A', 'Q', 'Z']).list);
  });

  test('list with multiple nodes, remove tail - sets new tails next to head', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    // remove Z
    remove(list, nodes[nodes.length - 1]);
    expect(nodes[nodes.length - 2].next).toEqual(list.head);
  });

  test('list with multiple nodes, remove middle node - sets list to expected', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    // remove Z
    remove(list, nodes[2]);
    expect(list).toEqual(createLinkedList(['A', 'Q', 'C']).list);
  });

  test('list with one node - sets list to expected', () => {
    const { list, nodes } = createLinkedList(['Q']);
    remove(list, nodes[0]);
    expect(list).toEqual(createLinkedList().list);
  });

  test('list with one node - sets head to null', () => {
    const { list, nodes } = createLinkedList(['Q']);
    remove(list, nodes[0]);
    expect(list.head).toEqual(null);
  });

  test('list does not contain node - list is not modified', () => {
    const { list } = createLinkedList(['A', 'Q', 'Z', 'C']);
    remove(list, new Node('P'));
    expect(list).toStrictEqual(createLinkedList(['A', 'Q', 'Z', 'C']).list);
  });
});
