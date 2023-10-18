/**
 * Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 */

const iterative = (() => {
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

  return (root, k) => {
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
})();

const recursive = (root, k) => {
  let index = 1;
  const kTh = (node) => {
    if (!node) {
      return -1;
    }
    const left = kTh(node.left);
    if (left !== -1) {
      return left;
    }
    if (index++ === k) {
      return node.val;
    }
    return kTh(node.right);
  };
  return kTh(root);
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
export const kthSmallest = iterative;
