/**
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.
 */

const recursive = (() => {
  const inOrder = (root, visitFn) => {
    if (!root) {
      return;
    }
    inOrder(root.left, visitFn);
    visitFn(root);
    inOrder(root.right, visitFn);
  };

  return (root) => {
    const nums = [];
    inOrder(root, (node) => {
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
  const toVisit = [];
  let current = root;
  while (current || toVisit.length) {
    if (current) {
      toVisit.push(current);
      current = current.left;
    } else {
      current = toVisit.pop();
      nums.push(current.val);
      current = current.right;
    }
  }
  return nums;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const inorderTraversal = recursive;
