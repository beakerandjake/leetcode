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

const iterative = (root) => {
  if (!root) {
    return null;
  }
  const nums = [];
  const toVisit = [];
  let previous;
  let current = root;
  while (toVisit.length || current) {
    if (current) {
      toVisit.push(current);
      current = current.left;
    } else {
      const peek = toVisit.at(-1);
      if (peek.right && previous !== peek.right) {
        current = peek.right;
      } else {
        nums.push(peek.val);
        previous = toVisit.pop();
      }
    }
  }
  return nums;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const postorderTraversal = recursive;
