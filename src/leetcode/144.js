/**
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 */

const recursive = (() => {
  const preOrder = (root, visitFn) => {
    if (!root) {
      return;
    }
    visitFn(root);
    preOrder(root.left, visitFn);
    preOrder(root.right, visitFn);
  };

  return (root) => {
    const nums = [];
    preOrder(root, (node) => {
      nums.push(node.val);
    });
    return nums;
  };
})();

const iterative = (root) => {
  if (!root) {
    return [];
  }
  const nums = [];
  const toVisit = [root];
  while (toVisit.length) {
    const current = toVisit.pop();
    nums.push(current.val);
    if (current.right) {
      toVisit.push(current.right);
    }
    if (current.left) {
      toVisit.push(current.left);
    }
  }
  return nums;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const preorderTraversal = recursive;
