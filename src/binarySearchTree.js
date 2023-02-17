/**
 * Contains methods relating to binary search trees.
 */

export class Node {
  left;
  right;
  parent;

  constructor(key, left, right) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

export const insert = (tree, node) => {
  // lhs <= key, rhs >= key
  let parent;
  let current = tree;
  while (current) {
    parent = current;
    current = node.key <= current.key ? current.left : current.right;
  }
  node.parent = parent;
  if (node.key <= parent.key) {
    parent.left = node;
  } else {
    parent.right = node;
  }
};

export const inOrder = (node, visitFn) => {
  if (!node) {
    return;
  }
  inOrder(node.left, visitFn);
  visitFn(node.key);
  inOrder(node.right, visitFn);
};

export const preOrder = (node, visitFn) => {
  if (!node) {
    return;
  }
  visitFn(node.key);
  preOrder(node.left, visitFn);
  preOrder(node.right, visitFn);
};

export const postOrder = (node, visitFn) => {
  if (!node) {
    return;
  }
  postOrder(node.left, visitFn);
  postOrder(node.right, visitFn);
  visitFn(node.key);
};

export const max = (node) => {
  let current = node;
  while (current.right) {
    current = current.right;
  }
  return current;
};

export const min = (node, parent) => {
  if (!node) {
    return parent;
  }
  return min(node.left, node);
};

export const includes = (node, key) => {
  if (!node) {
    return false;
  }

  if (node.key === key) {
    return true;
  }

  return key <= node.key ? includes(node.left, key) : includes(node.right, key);
};

export const find = (node, key) => {
  if (!node || node.key === key) {
    return node || null;
  }
  return key <= node.key ? find(node.left, key) : find(node.right, key);
};

export const successor = (node) => {
  if (node.right) {
    return min(node.right);
  }
  let current = node.parent;
  while (current && node === current.right) {
    node = current;
    current = current.parent;
  }
  return current || null;
};

export const predecessor = (node) => {
  if (node.left) {
    return max(node.left);
  }
  let current = node.parent;
  while (current && node === current.left) {
    node = current;
    current = current.parent;
  }
  return current || null;
};

export const printTree = (node) => {
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
