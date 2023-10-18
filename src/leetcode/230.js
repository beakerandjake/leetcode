/**
 * Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 */

const inOrder = (root, visitFn) => {
  if (!root) {
    return;
  }
  inOrder(root.left, visitFn);
  if (visitFn(root) === false) {
    return;
  }
  inOrder(root.right, visitFn);
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
export const kthSmallest = (root, k) => {
  let index = 1;
  let toReturn;
  inOrder(root, (node) => {
    if (index++ === k) {
      toReturn = node;
      return false;
    }
  });
  return toReturn?.val;
};
