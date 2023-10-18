/**
 * Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.
 */

const inOrder = (node, visitFn) => {
  if (!node) {
    return;
  }
  inOrder(node.left, visitFn);
  visitFn(node);
  inOrder(node.right, visitFn);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const getMinimumDifference = (root) => {
  let index = 0;
  let previous;
  let minDifference = Number.MAX_SAFE_INTEGER;

  inOrder(root, (node) => {
    if (index++ > 0) {
      const difference = node.val - previous;
      if (difference < minDifference) {
        minDifference = difference;
      }
    }
    previous = node.val;
  });

  return minDifference;
};
