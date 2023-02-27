import { Node, DoublyLinkedList, find, insertBefore } from '../src/doublyLinkedList.js';

const createLinkedList = (keys) => {
  const head = new Node(keys[0]);
  const list = new DoublyLinkedList(head);
  const nodes = [head];
  let previousNode = head;
  for (let index = 1; index < keys.length; index++) {
    const currentNode = new Node(keys[index]);
    nodes.push(currentNode);

    previousNode.next = currentNode;
    currentNode.previous = previousNode;
    previousNode = currentNode;
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

// describe('insertAfter()', () => {
//   test('inserts node in the middle of list', () => {
//     const { linkedList, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
//     // Insert B after Q.
//     insertAfter(nodes[1], new Node('B'));
//     expect(linkedList).toStrictEqual(
//       createLinkedList(['A', 'Q', 'B', 'Z', 'C']).linkedList
//     );
//   });

//   //   test('inserts node at the end of list', () => {
//   //     const { linkedList, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
//   //     // Insert B after C.
//   //     insertAfter(nodes[3], new Node('B'));
//   //     expect(linkedList).toStrictEqual(
//   //       createLinkedList(['A', 'Q', 'Z', 'C', 'B']).linkedList
//   //     );
//   //   });
// });

describe('insertBefore()', () => {
  test('inserts node in the middle of list', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    // Insert B before Z.
    insertBefore(list, nodes[2], new Node('B'));
    expect(list).toStrictEqual(createLinkedList(['A', 'Q', 'B', 'Z', 'C']).list);
  });

  test('inserts node at the start of list', () => {
    const { list, nodes } = createLinkedList(['A', 'Q', 'Z', 'C']);
    // Insert B before A.
    insertBefore(list, nodes[0], new Node('B'));
    expect(list).toStrictEqual(createLinkedList(['B', 'A', 'Q', 'Z', 'C']).list);
  });
});

// describe('remove()', () => {});
