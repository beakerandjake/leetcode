/**
 * Consider all the leaves of a binary tree, from left to right order,
 * the values of those leaves form a leaf value sequence.
 * Two binary trees are considered leaf-similar if their leaf value sequence is the same.
 * Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const isLeaf = (node) => !node.left && !node.right;

const leafNodes = (root) => {
  const toReturn = [];
  const queue = [root];
  while (queue.length) {
    const current = queue.pop();
    if (isLeaf(current)) {
      toReturn.push(current.val);
      continue;
    }
    if (current.right) {
      queue.push(current.right);
    }
    if (current.left) {
      queue.push(current.left);
    }
  }
  return toReturn;
};

const arraysEqual = (lhs, rhs) =>
  lhs.length === rhs.length ? lhs.every((x, i) => x === rhs[i]) : false;

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
export const leafSimilar = (root1, root2) =>
  arraysEqual(leafNodes(root1), leafNodes(root2));
