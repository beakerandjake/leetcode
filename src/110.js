/**
 * Given a binary tree, determine if it is height-balanced.
 */

const height = (root) => {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }

  const toReturn = Math.max(height(root.left), height(root.right));
  return toReturn === 0 ? 0 : 1 + toReturn;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isBalanced = (root) => {
  if (!root) {
    return true;
  }

  if (Math.abs(height(root.left) - height(root.right)) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
};
