/**
 * Given the root of a binary tree, return the number of uni-value subtrees
 * A uni-value subtree means all nodes of the subtree have the same value.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const countUnivalSubtrees = (root) => {
  let count = 0;
  const recurse = (node) => {
    if (!node) {
      return true;
    }
    const left = recurse(node.left);
    const right = recurse(node.right);
    if (!left || !right) {
      return false;
    }
    if (
      (node.left && node.left.val !== node.val) ||
      (node.right && node.right.val !== node.val)
    ) {
      return false;
    }
    count++;
    return true;
  };
  recurse(root);
  return count;
};
