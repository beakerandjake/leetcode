/**
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 */


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export const rightSideView = (root) => {
  if (!root) {
    return [];
  }

  const toReturn = [root.val];
  const queue = [{ node: root, level: 0 }];
  let currentLevel = 0;
  while (queue.length) {
    const { node, level } = queue.shift();

    if (level !== currentLevel) {
      currentLevel = level;
    }

    toReturn[currentLevel] = node.val;

    if (node.left) {
      queue.push({ node: node.left, level: level + 1 });
    }
    if (node.right) {
      queue.push({ node: node.right, level: level + 1 });
    }
  }
  return toReturn;
};
