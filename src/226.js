/**
 * Given the root of a binary tree, invert the tree, and return its root.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const swapChildren = (node) => {
  const temp = node.right;
  node.right = node.left;
  node.left = temp;
};

const invert = (node) => {
  if (!node) {
    return;
  }
  swapChildren(node);
  invert(node.left);
  invert(node.right);
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
export const invertTree = (root) => {
  invert(root);
  return root;
};
