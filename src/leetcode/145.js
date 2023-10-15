/**
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 */

const recursive = (() => {
  const postOrder = (root, visitFn) => {
    if (!root) {
      return;
    }
    postOrder(root.left, visitFn);
    postOrder(root.right, visitFn);
    visitFn(root);
  };

  return (root) => {
    const nums = [];
    postOrder(root, (node) => {
      nums.push(node.val);
    });
    return nums;
  };
})();

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const postorderTraversal = recursive;
