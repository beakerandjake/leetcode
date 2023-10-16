/**
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const levelOrder = (root) => {
  if (!root) {
    return [];
  }
  const toReturn = [];
  const queue = [{ node: root, level: 0 }];
  while (queue.length) {
    const { node, level } = queue.shift();

    if (toReturn[level]) {
      toReturn[level].push(node.val);
    } else {
      toReturn[level] = [node.val];
    }

    if (node.left) {
      queue.push({ node: node.left, level: level + 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }
  return toReturn;
};
