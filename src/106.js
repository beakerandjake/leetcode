/**
 * Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {number[]} inOrder
 * @param {number[]} postOrder
 * @return {TreeNode}
 */
export const buildTree = (inOrder, postOrder) => {
  if (!postOrder.length) {
    return null;
  }
  const indexOf = inOrder.indexOf(postOrder.at(-1));

  return new TreeNode(
    postOrder.at(-1),
    buildTree(inOrder.slice(0, indexOf), postOrder.slice(0, indexOf)),
    buildTree(inOrder.slice(indexOf + 1), postOrder.slice(indexOf, -1))
  );
};
