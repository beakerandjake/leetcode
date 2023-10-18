/* eslint-disable no-param-reassign */
/**
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
 *
 * Basically, the deletion can be divided into two stages:
 *
 *     Search for a node to remove.
 *     If the node is found, delete the node.
 */

const findNode = (root, value) => {
  let parent = null;
  let current = root;
  while (current) {
    if (current.val === value) {
      return { parent, node: current };
    }
    parent = current;
    if (value < current.val) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null;
};

const findSuccessor = (root) => {
  let parent = root;
  let next = root.right;
  while (next.left) {
    parent = next;
    next = next.left;
  }
  return { parent, node: next };
};

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
export const deleteNode = (root, key) => {
  const toDelete = findNode(root, key);
  // bail if key isn't in tree.
  if (!toDelete) {
    return root;
  }

  // node is leaf.
  if (!toDelete.node.left && !toDelete.node.right) {
    // deleting the root node
    if (!toDelete.parent) {
      return null;
    }

    if (toDelete.parent.left === toDelete.node) {
      toDelete.parent.left = null;
    } else {
      toDelete.parent.right = null;
    }

    return root;
  }

  // node has one child.
  if (!toDelete.node.left || !toDelete.node.right) {
    // deleting root node.
    if (!toDelete.parent) {
      return toDelete.node.left || toDelete.node.right;
    }

    if (toDelete.node === toDelete.parent.left) {
      toDelete.parent.left = toDelete.node.left || toDelete.node.right;
    } else {
      toDelete.parent.right = toDelete.node.left || toDelete.node.right;
    }

    return root;
  }

  // node has two children
  const successor = findSuccessor(toDelete.node);
  if (successor.node === successor.parent.left) {
    successor.parent.left = successor.node.right;
  } else {
    successor.parent.right = successor.node.right;
  }
  toDelete.node.val = successor.node.val;
  return root;
};
