/**
 * You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
 * Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
export const insertIntoBST = (root, val) => {
  if (!root) {
    return new TreeNode(val);
  }

  let parent;
  let current = root;
  while (current) {
    parent = current;
    if (val < current.val) {
      current = current.left;
    } else {
      current = current.right;
    }
  }

  if (val < parent.val) {
    parent.left = new TreeNode(val);
  } else {
    parent.right = new TreeNode(val);
  }

  return root;
};
