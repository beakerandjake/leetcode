/**
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {number[]} preOrder
 * @param {number[]} inOrder
 * @return {TreeNode}
 */
export const buildTree = (preOrder, inOrder) => {
  if (!preOrder.length) {
    return null;
  }
  const rootIndex = inOrder.indexOf(preOrder[0]);
  return new TreeNode(
    preOrder[0],
    buildTree(preOrder.slice(1, rootIndex + 1), inOrder.slice(0, rootIndex)),
    buildTree(preOrder.slice(rootIndex + 1), inOrder.slice(rootIndex + 1))
  );
};
