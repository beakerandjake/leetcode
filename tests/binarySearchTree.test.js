import {
  Node,
  insert,
  min,
  max,
  find,
  inOrder,
  preOrder,
  postOrder,
  successor,
  predecessor,
  remove,
  printTree,
} from '../src/binarySearchTree.js';

/**
 * Returns the node with matching key.
 * @param {Node[]} nodes
 * @param {Any} value
 * @returns {Node}
 */
const getNode = (nodes, value) => nodes.find((x) => x.key === value);

/**
 * Returns a tree like
 *               15
 *            /      \
 *           6        18
 *          / \      /  \
 *         3   7    17   20
 *        / \   \
 *       2   4   13
 *              /
 *             9
 */
const getTree = () => {
  const nodes = [15, 6, 18, 3, 7, 17, 20, 2, 4, 13, 9].map((x) => new Node(x));
  const toReturn = getNode(nodes, 15);
  getNode(nodes, 15).left = getNode(nodes, 6);
  getNode(nodes, 15).right = getNode(nodes, 18);
  getNode(nodes, 6).parent = getNode(nodes, 15);
  getNode(nodes, 6).left = getNode(nodes, 3);
  getNode(nodes, 6).right = getNode(nodes, 7);
  getNode(nodes, 3).parent = getNode(nodes, 6);
  getNode(nodes, 3).left = getNode(nodes, 2);
  getNode(nodes, 3).right = getNode(nodes, 4);
  getNode(nodes, 2).parent = getNode(nodes, 3);
  getNode(nodes, 4).parent = getNode(nodes, 3);
  getNode(nodes, 7).parent = getNode(nodes, 6);
  getNode(nodes, 7).right = getNode(nodes, 13);
  getNode(nodes, 13).parent = getNode(nodes, 7);
  getNode(nodes, 13).left = getNode(nodes, 9);
  getNode(nodes, 9).parent = getNode(nodes, 13);
  getNode(nodes, 18).parent = getNode(nodes, 15);
  getNode(nodes, 18).left = getNode(nodes, 17);
  getNode(nodes, 18).right = getNode(nodes, 20);
  getNode(nodes, 17).parent = getNode(nodes, 18);
  getNode(nodes, 20).parent = getNode(nodes, 18);
  return toReturn;
};

describe('insert()', () => {
  test('smaller value - becomes left child', () => {
    const tree = new Node(10);
    const newNode = new Node(4);
    insert(tree, newNode);
    expect(tree.left).toBe(newNode);
  });

  test('smaller value - sets left child parent', () => {
    const tree = new Node(10);
    const newNode = new Node(4);
    insert(tree, newNode);
    expect(newNode.parent).toBe(tree);
  });

  test('smaller value - does not set right child', () => {
    const tree = new Node(10);
    insert(tree, new Node(4));
    expect(tree.right).toBe(null);
  });

  test('smaller value - does not change right child parent', () => {
    const tree = new Node(10);
    const rightChild = new Node(50);
    tree.right = rightChild;
    rightChild.parent = tree;
    insert(tree, new Node(4));
    expect(tree.right.parent).toBe(tree);
  });

  test('larger value - becomes right child', () => {
    const tree = new Node(10);
    const newNode = new Node(16);
    insert(tree, newNode);
    expect(tree.right).toBe(newNode);
  });

  test('larger value - sets right child parent', () => {
    const tree = new Node(10);
    const newNode = new Node(14);
    insert(tree, newNode);
    expect(newNode.parent).toBe(tree);
  });

  test('larger value - does not set left child', () => {
    const tree = new Node(10);
    insert(tree, new Node(14));
    expect(tree.left).toBe(null);
  });

  test('larger value - does not change left child parent', () => {
    const tree = new Node(10);
    const leftChild = new Node(4);
    tree.left = leftChild;
    leftChild.parent = tree;
    insert(tree, new Node(50));
    expect(tree.left.parent).toBe(tree);
  });

  test('can insert multiple times', () => {
    const expected = getTree();
    const tree = new Node(15);
    [6, 18, 3, 7, 2, 4, 13, 9, 17, 20].forEach((x) => {
      insert(tree, new Node(x));
    });
    expect(tree).toStrictEqual(expected);
  });
});

describe('min()', () => {
  test('returns node with minimum key in tree', () => {
    const { key } = min(getTree());
    expect(key).toBe(2);
  });
});

describe('max()', () => {
  test('returns node with maximum value in tree', () => {
    const { key } = max(getTree());
    expect(key).toBe(20);
  });
});

describe('find()', () => {
  test('returns null if value is not contained in tree', () => {
    const result = find(getTree(), 66);
    expect(result).toBe(null);
  });

  test('returns node if key is contained in tree', () => {
    const { key } = find(getTree(), 7);
    expect(key).toBe(7);
  });
});

describe('inOrder()', () => {
  test('nodes are visited in correct order', () => {
    const result = [];
    inOrder(getTree(), (x) => result.push(x));
    expect(result).toEqual([2, 3, 4, 6, 7, 9, 13, 15, 17, 18, 20]);
  });
});

describe('preOrder()', () => {
  test('nodes are visited in correct order', () => {
    const result = [];
    preOrder(getTree(), (x) => result.push(x));
    expect(result).toEqual([15, 6, 3, 2, 4, 7, 13, 9, 18, 17, 20]);
  });
});

describe('postOrder()', () => {
  test('nodes are visited in correct order', () => {
    const result = [];
    postOrder(getTree(), (x) => result.push(x));
    expect(result).toEqual([2, 4, 3, 9, 13, 7, 6, 17, 20, 18, 15]);
  });
});

describe('successor()', () => {
  test('returns successor if node has right subtree', () => {
    // get successor for node 7
    const { key } = successor(getTree().left.right);
    expect(key).toBe(9);
  });

  test('returns successor if node does not have a right subtree', () => {
    // get successor for node 13
    const { key } = successor(getTree().left.right.right);
    expect(key).toBe(15);
  });

  test('returns null if node does not have a successor', () => {
    // get successor for node 13
    const result = successor(getTree().right.right);
    expect(result).toBe(null);
  });
});

describe('predecessor()', () => {
  test('returns predecessor if node has left subtree', () => {
    // get predecessor for node 6
    const { key } = predecessor(getTree().left);
    expect(key).toBe(4);
  });

  test('returns predecessor if node does not have a left subtree', () => {
    // get predecessor for node 17
    const { key } = predecessor(getTree().right.left);
    expect(key).toBe(15);
  });

  test('returns null if node does not have a predecessor', () => {
    // get predecessor for node 2
    const result = predecessor(getTree().left.left.left);
    expect(result).toBe(null);
  });
});

describe('remove()', () => {
  test('removes leaf node', () => {
    // manually delete leaf node 20
    const expected = getTree();
    expected.right.right = null;

    const tree = getTree();
    remove(tree.right.right);
    expect(tree).toEqual(expected);
  });

  test('removes node with only left child', () => {
    // manually delete node 13
    const expected = getTree();
    const seven = expected.left.right;
    const nine = seven.right.left;
    seven.right = nine;
    nine.parent = seven;

    const tree = getTree();
    remove(tree.left.right.right);
    expect(tree).toEqual(expected);
  });

  test('removes node with only right child', () => {
    // manually delete node 7
    const expected = getTree();
    const six = expected.left;
    const thirteen = six.right.right;
    six.right = thirteen;
    thirteen.parent = six;

    const tree = getTree();
    remove(tree.left.right);
    expect(tree).toEqual(expected);
  });

  test('removes node with two children - successor is immediate right child', () => {
    // manually delete node 6
    const expected = getTree();
    const seven = expected.left.right;
    const three = expected.left.left;
    expected.left = seven;
    seven.parent = expected;
    seven.left = three;
    three.parent = seven;

    const tree = getTree();
    remove(tree.left);
    expect(tree).toEqual(expected);
  });

  test('removes node with two children - successor is in subtree', () => {
    /**
     * Create a tree like
     *               97
     *            /
     *          64
     *          / \
     *        60  72
     *           /  \
     *         65    79
     *          \
     *           69
     *             \
     *              71
     */
    const expected = new Node(97);
    const nodes = [64, 60, 72, 65, 79, 69, 71].map((x) => new Node(x));
    nodes.forEach((node) => insert(expected, node));
    const input = structuredClone(expected);

    // manually delete 64
    expected.left = getNode(nodes, 65);
    getNode(nodes, 65).parent = expected;
    getNode(nodes, 65).left = getNode(nodes, 60);
    getNode(nodes, 65).right = getNode(nodes, 72);
    getNode(nodes, 60).parent = getNode(nodes, 65);
    getNode(nodes, 72).parent = getNode(nodes, 65);
    getNode(nodes, 72).left = getNode(nodes, 69);
    getNode(nodes, 69).parent = getNode(nodes, 72);

    remove(input.left);

    expect(input).toEqual(expected);
  });
});
