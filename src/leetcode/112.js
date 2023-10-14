/**
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 * A leaf is a node with no children.
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
export const hasPathSum = (node, targetSum) => {
  if (!node) {
    return false;
  }
  if (!node.left && !node.right) {
    return node.val === targetSum;
  }
  const newTargetSum = targetSum - node.val;
  return hasPathSum(node.left, newTargetSum) || hasPathSum(node.right, newTargetSum);
};
