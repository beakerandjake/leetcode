import {
  Node,
  insert,
  min,
  max,
  includes,
  inOrder,
  preOrder,
  postOrder,
} from '../src/binarySearchTree.js';

/**
 * Create a tree like
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
// prettier-ignore
const numbers = [15, 6, 18, 3, 7, 17, 20, 2, 4, 13, 9];
const nodes = numbers.map((x) => new Node(x));
const node = (number) => nodes[numbers.indexOf(number)];
const exampleTree = node(15);
node(15).left = node(6);
node(15).right = node(18);
node(6).parent = node(15);
node(6).left = node(3);
node(6).right = node(7);
node(3).parent = node(6);
node(3).left = node(2);
node(3).right = node(4);
node(2).parent = node(3);
node(4).parent = node(3);
node(7).parent = node(6);
node(7).right = node(13);
node(13).parent = node(7);
node(13).left = node(9);
node(9).parent = node(13);
node(18).parent = node(15);
node(18).left = node(17);
node(18).right = node(20);
node(17).parent = node(18);
node(20).parent = node(18);

describe('insert()', () => {
  test('smaller value becomes left child', () => {
    const tree = new Node(10);
    const newNode = new Node(4);
    insert(tree, newNode);
    expect(tree.left).toBe(newNode);
    expect(tree.right).toBeFalsy();
  });

  test('bigger value becomes right child', () => {
    const tree = new Node(10);
    const newNode = new Node(16);
    insert(tree, newNode);
    expect(tree.right).toBe(newNode);
    expect(tree.left).toBeFalsy();
  });

  test('can insert multiple times', () => {
    const tree = new Node(15);
    [6, 18, 3, 7, 2, 4, 13, 9, 17, 20].forEach((x) => {
      insert(tree, new Node(x));
    });
    console.log(tree);
    expect(tree).toStrictEqual(exampleTree);
  });
});

describe('min()', () => {
  test('returns minimum value in tree', () => {
    const result = min(exampleTree);
    expect(result).toBe(2);
  });
});

describe('max()', () => {
  test('returns maximum value in tree', () => {
    const result = max(exampleTree);
    expect(result).toBe(20);
  });
});

describe('includes()', () => {
  test('returns false if value is not contained in tree', () => {
    const result = includes(exampleTree, 66);
    expect(result).toBe(false);
  });

  test('returns true if value is contained in tree', () => {
    const result = includes(exampleTree, 7);
    expect(result).toBe(true);
  });
});

describe('inOrder()', () => {
  test('nodes are visited in correct order', () => {
    const expected = [2, 3, 4, 6, 7, 9, 13, 15, 17, 18, 20];
    const result = [];
    inOrder(exampleTree, (x) => result.push(x));
    expect(result).toEqual(expected);
  });
});

describe('preOrder()', () => {
  test('nodes are visited in correct order', () => {
    const expected = [15, 6, 3, 2, 4, 7, 13, 9, 18, 17, 20];
    const result = [];
    preOrder(exampleTree, (x) => result.push(x));
    expect(result).toEqual(expected);
  });
});

describe('postOrder7()', () => {
  test('nodes are visited in correct order', () => {
    const expected = [2, 4, 3, 9, 13, 7, 6, 17, 20, 18, 15];
    const result = [];
    postOrder(exampleTree, (x) => result.push(x));
    expect(result).toEqual(expected);
  });
});
