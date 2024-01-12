/**
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
 */

const levelOrder = (root) => {
  if (!root) {
    return [];
  }
  const toReturn = [];
  const queue = [{ node: root, level: 0 }];
  while (queue.length) {
    const { node, level } = queue.shift();
    if (!toReturn[level]) {
      toReturn[level] = [node.val];
    } else {
      toReturn[level].push(node.val);
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

const shouldZig = (index) => index % 2 === 0;

const zigZag = (levelOrderNodes) =>
  levelOrderNodes.map((level, index) => (shouldZig(index) ? level : level.reverse()));

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const zigzagLevelOrder = (root) => zigZag(levelOrder(root));
