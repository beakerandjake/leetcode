/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 *
 *  The left subtree of a node contains only nodes with keys less than the node's key.
 *
 *  The right subtree of a node contains only nodes with keys greater than the node's key.
 *
 *  Both the left and right subtrees must also be binary search trees.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const simple = (() => {
  const validate = (root, min, max) => {
    if (!root) {
      return true;
    }
    if ((min && root.val <= min.val) || (max && root.val >= max.val)) {
      return false;
    }
    return validate(root.left, min, root) && validate(root.right, root, max);
  };

  return (root) => validate(root, null, null);
})();

const usingSorting = (() => {
  const inOrder = (root, arr) => {
    if (!root) {
      return arr;
    }
    return [...inOrder(root.left, arr), root.val, ...inOrder(root.right, arr)];
  };
  return (root) => {
    const sorted = inOrder(root, []);
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] <= sorted[i - 1]) {
        return false;
      }
    }
    return true;
  };
})();

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isValidBST = simple;
