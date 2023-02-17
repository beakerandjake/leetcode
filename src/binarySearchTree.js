import { logGroup } from './output.js';

class Node {
  left;
  right;

  constructor(key, left, right) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

const insert = (tree, node) => {
  // lhs <= key, rhs >= key
  let parent;
  let current = tree;
  while (current) {
    parent = current;
    current = node.key <= current.key ? current.left : current.right;
  }
  if (node.key <= parent.key) {
    parent.left = node;
  } else {
    parent.right = node;
  }
};

const inOrder = (node) => {
  if (!node) {
    return;
  }
  inOrder(node.left);
  console.log(node.key);
  inOrder(node.right);
};

const preOrder = (node) => {
  if (!node) {
    return;
  }
  console.log(node.key);
  preOrder(node.left);
  preOrder(node.right);
};

const postOrder = (node) => {
  if (!node) {
    return;
  }
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.key);
};

const search = (node, key) => {
  if (!node || node.key === key) {
    return node;
  }

  if (key <= node.left) {
    return search(node.left, key);
  }

  return search(node.right, key);
};

const printTree = (node) => {
  const doPrint = (prefix, node) => {
    if (!node) {
      return;
    }
    doPrint(prefix + '     ', node.right, false);
    console.log(prefix + '|-- ' + node.key);
    doPrint(prefix + '     ', node.left, true);
  };

  doPrint('', node);
};

export const test = () => {
  const tree = new Node('F');
  ['B', 'G', 'A', 'D', 'I', 'C', 'E', 'H'].forEach((x) => {
    insert(tree, new Node(x));
  });
  logGroup('Tree', () => printTree(tree));
  logGroup('Pre-Order', () => preOrder(tree));
  logGroup('In-Order', () => inOrder(tree));
  logGroup('Post-Order', () => postOrder(tree));
};
