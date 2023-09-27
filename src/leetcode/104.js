/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const depthRecursive = (node) => {
  if (!node) {
    return 0;
  }
  return Math.max(depthRecursive(node.left), depthRecursive(node.right)) + 1;
};

const depthTailRecursive = (node, depth) => {
  if (!node) {
    return depth;
  }
  return Math.max(
    depthTailRecursive(node.left, depth + 1),
    depthTailRecursive(node.right, depth + 1)
  );
};

const depthIterative = (root) => {
  if (!root) {
    return 0;
  }

  let deepest = 0;
  const queue = [{ node: root, depth: 1 }];
  while (queue.length) {
    const { node, depth } = queue.pop();
    deepest = Math.max(deepest, depth);
    if (node.left) {
      queue.push({ node: node.left, depth: depth + 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, depth: depth + 1 });
    }
  }

  return deepest;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maxDepth = depthRecursive;
